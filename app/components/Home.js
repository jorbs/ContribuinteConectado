import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Constants from '../common/Constants';
import Styles from '../common/Styles';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  navigate(path, screenParam = null) {
    const {params} = this.props.navigation.state;
    this.props.navigation.navigate(path, {...params, screenParam});
  }

  async componentDidMount() {
    PushNotification.configure({
      onNotification: (notification) => {
        this.navigate(notification.data.screen, notification.data.screenParam);
      },
    });

    this.notifyExpirationDAR();
    this.notifyCNStatusChange();
    this.notifyRestrictions();
    this.notifyProcesses();
  }

  async notifyExpirationDAR() {
    const {params} = this.props.navigation.state;
    const currentTime = moment();
    
    for (let i = 3; i >= 1; i--) {
      const previousMonth = moment().subtract(i, 'month').format('MM/YYYY');
      
      try {
        const records = await SefazAPI.consultarValoresAntecipados(params.requestToken, params.login, previousMonth);

        if (records.length === 0) {
          continue;
        }

        records.map(async record => {
          const notificationId = record.sequencialAntecipacao;
          
          if (record.dataPagamento) {
            ['01', '02', '03'].map(async suffix => {
              await AsyncStorage.removeItem(notificationId + suffix);
              PushNotification.cancelLocalNotifications({id: notificationId + suffix});              
            });

            return;
          }

          const documentType = record.codigoTributo === Constants.ANTECIPADO ? 'Antecipado' : 'FECOPEP';
          const expirationDate = moment(record.dataVencimento).hour(22).minute(0);
          
          if (expirationDate.isBefore(currentTime)) {
            const isNotificationPending = await AsyncStorage.getItem(notificationId + '01');

            if (!isNotificationPending) {
              const notificationTime = moment(currentTime).hour(10).minute(0);
              
              await AsyncStorage.setItem(notificationId + '01', 'pending');
            
              PushNotification.localNotificationSchedule({
                id: notificationId + '01',
                title: 'Antecipado e FECOEP',
                message: `O ${documentType} de competência ${previousMonth} venceu em ${expirationDate.format(Constants.DATE_FORMAT)}. Toque para ver detalhes.`,
                date: notificationTime.toDate(),
                repeatType: 'day',
                playSound: true,
                data: {
                  screen: 'Antecipado',
                  screenParam: previousMonth
                }
              });
            }
          } else {
            const fromDate = moment(expirationDate).subtract(Constants.DAR_NOTIFICATION_7_DAYS, 'days').hour(0).minute(0);
            
            if (currentTime.isBefore(fromDate)) {
              const isNotificationPending = await AsyncStorage.getItem(notificationId + '02');
  
              if (!isNotificationPending) {
                const notificationTime = moment(expirationDate).subtract(Constants.DAR_NOTIFICATION_7_DAYS, 'days').hour(10).minute(0);

                await AsyncStorage.setItem(notificationId + '02', 'pending');

                PushNotification.localNotificationSchedule({
                  id: notificationId + '02',
                  title: 'Antecipado e FECOEP',
                  message: `Vencimento de ${documentType} em ${expirationDate.format(Constants.DATE_FORMAT)} (competência ${previousMonth}).`,
                  date: notificationTime.toDate(),
                  playSound: true,
                  data: {
                    screen: 'Antecipado',
                    screenParam: previousMonth
                  }
                });
              }
            }
  
            if (currentTime.isAfter(fromDate)) {
              const isNotificationPending = await AsyncStorage.getItem(notificationId + '03');
  
              if (!isNotificationPending) {
                const notificationTime = moment(expirationDate).subtract(Constants.DAR_NOTIFICATION_1_DAY, 'day').hour(16).minute(0);

                await AsyncStorage.setItem(notificationId + '03', 'pending');

                PushNotification.localNotificationSchedule({
                  id: notificationId + '03',
                  title: 'Antecipado e FECOEP',
                  message: `Vencimento de ${documentType} em ${expirationDate.format(Constants.DATE_FORMAT)} (competência ${previousMonth}).`,
                  date: notificationTime.toDate(),
                  playSound: true,
                  data: {
                    screen: 'Antecipado',
                    screenParam: previousMonth
                  }
                });
              }
            }
          }
        });
      } catch(e) {
        console.warn(`Unable to notify DAR for the date ${previousMonth}: `, e);
      }
    }
  }

  async notifyCNStatusChange() {
    const {params} = this.props.navigation.state;

    try {
      const response = await SefazAPI.consultarCnd(params.requestToken, params.login);
      const cnStatus = await AsyncStorage.getItem(Constants.CN_STATUS_KEY);

      await AsyncStorage.setItem(Constants.CN_STATUS_KEY, response.tipoCertidao);

      if (cnStatus != null && cnStatus !== response.tipoCertidao) {
        PushNotification.localNotification({
          title: 'Certidões',
          message: 'Houve mudança no status da sua certidão.',
          data: {
            screen: 'Certidao'
          }
        });
      }
    } catch(e) {
      console.warn(`Unable to notify CN status change: `, e);
    }
  }

  async notifyRestrictions() {
    const {params} = this.props.navigation.state;

    try {
      const response = await SefazAPI.obterRestricoes(params.requestToken, params.login);
      const restrictionsCount = await AsyncStorage.getItem(Constants.RESTRICTIONS_COUNT_KEY);

      await AsyncStorage.setItem(Constants.RESTRICTIONS_COUNT_KEY, response.length.toString());
      
      if (restrictionsCount != null && parseInt(restrictionsCount) != response.length) {
        PushNotification.localNotification({
          title: 'Restrições',
          message: 'Houve mudança no número de restrições.',
          data: {
            screen: 'RestricoesPendencias'
          }
        });
      }
    } catch(e) {
      console.warn(`Unable to notify restrictions change: `, e.message);
    }
  }

  async notifyProcesses() {
    const {params} = this.props.navigation.state;
    
    try {
      const result = await AsyncStorage.getItem(Constants.WATCHED_PROCESSES_KEY);
      const processes = JSON.parse(result) || [];

      for (const i in processes) {
        const processNumber = processes[i].number;
        const processStatus = processes[i].status;
        
        SefazAPI.consultarPorNumeroProcesso(params.requestToken, processNumber).then(process => {
          if (process != null && processStatus !== process.situacao) {
            PushNotification.localNotification({
              title: 'Processos',
              message: `Houve mudança na situação do processo ${processNumber}.`,
              data: {
                screen: 'Processos',
                screenParam: processNumber
              }
            });
          }
        });
      }
    } catch(e) {
      console.warn(`Unable to notify restrictions change: `, e.message);
    }
  }

  render() {
    return (
      <View style={Styles.menu}>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('SituacaoCadastral')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="vcard-o" color="white" size={48} />
            <Text style={Styles.menuItemLabel}>Situação{"\n"}Cadastral</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('Certidao')} style={Styles.menuCol}>
            <Entypo name="price-ribbon" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Certidões</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('TermoApreensao')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="truck" color="white" size={48} />
            <Text style={Styles.menuItemLabel}>Termos de{"\n"}Apreensão</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('RestricoesPendencias')} style={Styles.menuCol}>
            <FontAwesome name="list-alt" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Restrições e{"\n"}Pendências</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('Antecipado')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="money" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Antecipados</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('Processos')} style={Styles.menuCol}>
            <Entypo name="archive" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Processos</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('SimuladorST')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="calculator" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Simulador ST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.menuCol}>
            <FontAwesome name="phone" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Call Center</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}