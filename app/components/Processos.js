import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, ActivityIndicator, TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Entypo from 'react-native-vector-icons/Entypo';
import dismissKeyboard from 'dismissKeyboard';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';

export default class Processos extends Component {
  static navigationOptions = {
    title: 'Processos',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {pendingRequest: false};
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    params.screenParam && this.setState({processNumber: params.screenParam});
  }

  async onSearch() {
    if (this.state.processNumber == null || this.state.processNumber.length == 0) {
      Alert.alert('Número de processo inválido.');
      return;
    }

    this.setState({pendingRequest: true});

    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    try {
      const watched = await this.isProcessWatched(this.state.processNumber);
      const process = await SefazAPI.consultarPorNumeroProcesso(params.requestToken, this.state.processNumber);

      if (process == null || Object.keys(process).length == 0) {
        this.setState({processNotFound: true});
      } else {
        const processDetails = [
          {key: 'Descrição', data: process.descricaoAssunto, icon: 'archive', watch: {processNumber: this.state.processNumber, status: process.situacao}},
          {key: 'Interessado', data: process.nomeInteressado},
          {key: 'Acatado em', data: process.dataAcatamento},
          {key: 'Protocolado em', data: process.dataProtocolo},
          {key: 'Situação', data: process.situacao},
          {key: 'Setor', data: process.setor},
          {key: 'Última movimentação', data: process.ultimaMovimentacao}
        ];

        this.setState({processDetails, watched, processNotFound: false});
      }
    } catch(e) {
      Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]);
    } finally {
      this.setState({pendingRequest: false});
    }
  }

  async onWatchProcess(processNumber, processStatus) {
    try {
      const result = await AsyncStorage.getItem(Constants.WATCHED_PROCESSES_KEY);
      const processes = JSON.parse(result) || [];
      let processIndex = -1;

      for (const i in processes) {
        const process = processes[i];

        if (process.number == processNumber) {
          processIndex = i;
          break;
        }
      }

      let watched = processIndex == -1;

      if (processIndex == -1) {
        Alert.alert('Contribuinte Conectado', 'Deseja ser notificado sobre a mudança de situação deste processo?', [
          {
            text: 'Sim',
            onPress: async () => {
              processes.push({number: processNumber, status: processStatus});
              await AsyncStorage.setItem(Constants.WATCHED_PROCESSES_KEY, JSON.stringify(processes));
              this.setState({watched});
            }
          },
          {text: 'Não'}
        ]);
      } else {
        Alert.alert('Contribuinte Conectado', 'Deixar de ser notificado sobre a mudança de situação deste processo?', [
          {
            text: 'Sim',
            onPress: async () => {
              processes.splice(processIndex, 1);
              await AsyncStorage.setItem(Constants.WATCHED_PROCESSES_KEY, JSON.stringify(processes));
              this.setState({watched});
            }
          },
          {text: 'Não'}
        ]);
      }
    } catch (e) {
      console.warn('Unable to use AsyncStorage in processes screen: ', e.message);
    }
  }

  async isProcessWatched(processNumber) {
    try {
      const result = await AsyncStorage.getItem(Constants.WATCHED_PROCESSES_KEY);
      const processes = JSON.parse(result) || [];
      
      for (const i in processes) {
        if (processes[i].number === processNumber) {
          return true;
        }
      }
    } catch (e) {
      console.warn('Unable to use AsyncStorage in processes screen: ', e.message);
    }

    return false;
  }

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <Entypo name={item.icon} style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.key}</Text>
            <Text style={Styles.itemSecondaryText}>{item.data}</Text>
          </View>
          {item.watch && <TouchableOpacity onPress={() => this.onWatchProcess(item.watch.processNumber, item.watch.status)}>
            <MaterialCommunityIcons name={this.state.watched ? 'eye-off' : 'eye'} style={Styles.actionIcon}/>
          </TouchableOpacity>}
        </View>
      </View>
    );
  }

  renderProcessDetails() {
    if (this.state.processNotFound) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <MaterialCommunityIcons style={Styles.searchResultIcon} name="alert-circle" />
            <Text style={Styles.searchResultLabel}>Processo não encontrado.</Text>
          </View>
        </View>
      );
    } else if (this.state.processDetails) {
      return <FlatList data={this.state.processDetails} extraData={this.state} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <Grid>
            <Row size={25}>
              <Col style={Styles.searchContainer}>
                <View>
                  <Text style={Styles.formFieldLabel}>Número do processo</Text>
                  <TextInput
                    value={this.state.processNumber}
                    blurOnSubmit={true}
                    returnKeyType="done"
                    onSubmitEditing={event => this.onSearch()}
                    onChangeText={processNumber => this.setState({processNumber})}
                    style={[Styles.inputTextMd, Styles.textCenter, Styles.formInputText]} />
                </View>
                <TouchableOpacity onPress={() => this.onSearch()} style={[Styles.row, Styles.searchButtonContainer]} disable={this.state.pendingRequest}>
                  {this.state.pendingRequest ? <ActivityIndicator style={Styles.activityIndicator} /> : <MaterialCommunityIcons name="magnify" style={Styles.searchButtonIcon} />}
                  <Text style={Styles.searchButton}>{this.state.pendingRequest ? 'Consultando...' : 'Consultar'}</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row size={75}>
              <Col>
                {this.renderProcessDetails()}
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}