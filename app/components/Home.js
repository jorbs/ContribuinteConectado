import React, {Component} from 'react';
import {Text, View, TouchableOpacity, AsyncStorage, Alert, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Row, Grid} from 'react-native-easy-grid';
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

    this.notifyDarExpiration();
    this.notifyCNStatusChange();
    this.notifyRestrictions();
    this.notifyProcesses();
  }

  async isNotificationScheduled(notificationId) {
    const result = await AsyncStorage.getItem(Constants.NOTIFICATIONS_PARENT_KEY);
    const notifications = JSON.parse(result) || [];

    return notifications.indexOf(notificationId) != -1;
  }

  async scheduleNotification(notificationId) {
    const result = await AsyncStorage.getItem(Constants.NOTIFICATIONS_PARENT_KEY);
    const notifications = JSON.parse(result) || [];

    notifications.push(notificationId);

    await AsyncStorage.setItem(Constants.NOTIFICATIONS_PARENT_KEY, JSON.stringify(notifications));
  }

  async unscheduleNotification(notificationId) {
    const result = await AsyncStorage.getItem(Constants.NOTIFICATIONS_PARENT_KEY);
    const notifications = JSON.parse(result) || [];
    const notificationIndex = notifications.indexOf(notificationId);

    if (notificationIndex != -1) {
      notifications.splice(notificationIndex, 1);
    }

    await AsyncStorage.setItem(Constants.NOTIFICATIONS_PARENT_KEY, JSON.stringify(notifications));
  }

  async notifyDarExpiration() {
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
          const notificationPrefix = record.sequencialAntecipacao;
          
          if (record.dataPagamento) {
            ['01', '02', '03'].map(async suffix => {
              const notificationId = notificationPrefix + suffix;

              this.unscheduleNotification(notificationId);
              PushNotification.cancelLocalNotifications({id: notificationId});
            });

            return;
          }

          const documentType = record.codigoTributo === Constants.ANTECIPADO ? 'Antecipado' : 'FECOPEP';
          const expirationDate = moment(record.dataVencimento).hour(22).minute(0);
          
          if (expirationDate.isBefore(currentTime)) {
            const notificationId = notificationPrefix + '01';
            const isScheduled = await this.isNotificationScheduled(notificationId);

            if (!isScheduled) {
              const notificationTime = moment(currentTime).add(30, 'minutes');
              
              await this.scheduleNotification(notificationId);

              PushNotification.localNotificationSchedule({
                id: notificationId,
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
              const notificationId = notificationPrefix + '02';
              const isScheduled = await this.isNotificationScheduled(notificationId);
  
              if (!isScheduled) {
                const notificationTime = moment(expirationDate).subtract(Constants.DAR_NOTIFICATION_7_DAYS, 'days').hour(10).minute(0);

                await this.scheduleNotification(notificationId);

                PushNotification.localNotificationSchedule({
                  id: notificationId,
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
              const notificationId = notificationPrefix + '03';
              const isScheduled = await this.isNotificationScheduled(notificationId);
  
              if (!isScheduled) {
                const notificationTime = moment(expirationDate).subtract(Constants.DAR_NOTIFICATION_1_DAY, 'day').hour(16).minute(0);

                await this.scheduleNotification(notificationId);

                PushNotification.localNotificationSchedule({
                  id: notificationId,
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
            screen: 'Restricoes'
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
          if (process != null && Object.keys(process).length > 0 && processStatus !== process.situacao) {
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

  async logout() {
    Alert.alert('Contribuinte Conectado', 'Deseja realmente sair?', [
      {
        text: 'Sim',
        onPress: async () => {
          const result = await AsyncStorage.getItem(Constants.NOTIFICATIONS_PARENT_KEY);
          const notificationIds = JSON.parse(result) || [];
      
          notificationIds.map(notificationId => PushNotification.cancelLocalNotifications({id: notificationId}));
      
          await AsyncStorage.multiRemove([
            Constants.REQUEST_TOKEN_KEY,
            Constants.CN_STATUS_KEY,
            Constants.RESTRICTIONS_COUNT_KEY,
            Constants.WATCHED_PROCESSES_KEY,
            Constants.NOTIFICATIONS_PARENT_KEY
          ]);

          this.navigate('Login');
        }
      },
      {text: 'Não'}
    ]);
  }

  render() {
    const {params} = this.props.navigation.state;

    return (
      <Grid style={Styles.homeContainer}>
        <Row size={15}>
          <View style={Styles.logoContainer}>
            <View style={[Styles.row, {justifyContent: 'space-between'}]}>
              <View style={Styles.row}>
                <Image source={require('./../assets/images/home-logo.png')} style={Styles.appLogo} />
                <Text style={Styles.appLabel}>Contribuinte{"\n"}Conectado</Text>
              </View>
              <View style={{paddingRight: 16}}>
                <TouchableOpacity style={Styles.logoutButton} onPress={() => this.logout()}>
                  <MaterialCommunityIcons name="logout" style={Styles.logoutIcon} />
                  <Text style={Styles.logoutLabel}>Sair</Text>
                </TouchableOpacity>
                <View>
                  <Text style={Styles.caceal}>{params.login}</Text>
                </View>
              </View>
            </View>
          </View>
        </Row>
        <Row size={85} style={Styles.menu}>
          <Grid>
            <Row style={Styles.menuRow}>
              <Col>
                <TouchableOpacity onPress={() => this.navigate('SituacaoCadastral')} style={Styles.menuItem} allowFontScaling={false}>
                  <MaterialCommunityIcons name="account-card-details" style={Styles.menuItemIcon} />
                  <Text style={Styles.menuItemLabel}>Cadastro</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => this.navigate('Certidao')} style={Styles.menuItem} allowFontScaling={false}>
                  <MaterialCommunityIcons name="certificate" style={Styles.menuItemIcon}/>
                  <Text style={Styles.menuItemLabel}>Certidões</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={Styles.menuRow}>
              <Col>
                <TouchableOpacity onPress={() => this.navigate('TermoApreensao')} style={Styles.menuItem} allowFontScaling={false}>
                  <MaterialCommunityIcons name="truck" style={Styles.menuItemIcon} />
                  <Text style={Styles.menuItemLabel}>Termos</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => this.navigate('Restricoes')} style={Styles.menuItem} allowFontScaling={false}>
                  <MaterialCommunityIcons name="format-list-checks" style={Styles.menuItemIcon}/>
                  <Text style={Styles.menuItemLabel}>Restrições</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={Styles.menuRow}>
              <Col>
                <TouchableOpacity onPress={() => this.navigate('Antecipado')} style={Styles.menuItem} allowFontScaling={false}>
                  <FontAwesome name="money" style={Styles.menuItemIcon}/>
                  <Text style={Styles.menuItemLabel}>Antecipados</Text>
                </TouchableOpacity>
                </Col>
              <Col>
              <TouchableOpacity onPress={() => this.navigate('Processos')} style={Styles.menuItem} allowFontScaling={false}>
                <Entypo name="archive" style={Styles.menuItemIcon}/>
                <Text style={Styles.menuItemLabel}>Processos</Text>
              </TouchableOpacity>
              </Col>
            </Row>
            <Row style={Styles.menuRow}>
            <Col>
              <TouchableOpacity onPress={() => this.navigate('SimuladorST')} style={Styles.menuItem} allowFontScaling={false}>
                <MaterialCommunityIcons name="calculator" style={Styles.menuItemIcon}/>
                <Text style={Styles.menuItemLabel}>Simulador ST</Text>
              </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity onPress={() => this.navigate('NcmAliquotas')} style={Styles.menuItem} allowFontScaling={false}>
                  <Text style={Styles.menuItemNcm}>8581.30</Text>
                  <Text style={Styles.menuItemLabel}>NCM</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={Styles.menuRow}>
            <Col>
              <TouchableOpacity onPress={() => Alert.alert('Em desenvolvimento.')} style={Styles.menuItem} allowFontScaling={false}>
                <MaterialCommunityIcons name="flag" style={Styles.menuItemIcon}/>
                <Text style={Styles.menuItemLabel}>Ações Fiscais</Text>
              </TouchableOpacity>
              </Col>
              <Col>
              <TouchableOpacity style={Styles.menuItem} allowFontScaling={false} onPress={() => Alert.alert('Em desenvolvimento.')}>
                <MaterialCommunityIcons name="phone" style={Styles.menuItemIcon} />
                <Text style={Styles.menuItemLabel}>Call Center</Text>
              </TouchableOpacity>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Grid>
    );
  }
}