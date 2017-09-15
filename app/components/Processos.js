import React, {Component} from 'react';
import {View, ScrollView, Text, SectionList, TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import dismissKeyboard from 'dismissKeyboard';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

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
        const processDetails = [{
          title: process.descricaoAssunto,
          status: process.situacao,
          icon: 'archive',
          data: [
            {key: 'Interessado', data: process.nomeInteressado},
            {key: 'Acatado em', data: process.dataAcatamento},
            {key: 'Protocolado em', data: process.dataProtocolo},
            {key: 'Situação', data: process.situacao},
            {key: 'Setor', data: process.setor},
            {key: 'Última movimentação', data: process.ultimaMovimentacao},
          ]
        }];

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

      let message = 'Processo adicionado à lista de notificações.';
      let watched = true;

      if (processIndex == -1) {
        processes.push({number: processNumber, status: processStatus});
      } else {
        message = 'Processo removido da lista de notificações.';
        watched = false;
        processes.splice(processIndex, 1);
      }

      await AsyncStorage.setItem(Constants.WATCHED_PROCESSES_KEY, JSON.stringify(processes));
      this.setState({watched});
      Alert.alert(message);
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

  renderSectionHeader(section) {
    return (
      <View style={Styles.sectionHeaderContainer}>
        <Entypo name={section.icon} size={24} style={Styles.sectionHeaderIcon} />
        <Text style={Styles.sectionHeader}>{section.title}</Text>
      </View>
    );
  }

  renderSectionItem(item) {
    return (
      <View style={Styles.itemContainer}>
        <Text style={Styles.itemHeader}>{item.key}</Text>
        <Text style={Styles.itemBody}>{item.data}</Text>
      </View>
    );
  }

  renderSectionFooter(section) {
    return (
      <View style={Styles.action}>
        <TouchableOpacity onPress={() => this.onWatchProcess(this.state.processNumber, section.status)} style={Styles.actionButton}>
          <FontAwesome name={this.state.watched ? 'eye-slash' : 'eye'} style={Styles.actionIcon}/>
          <Text style={Styles.actionLabel}>{this.state.watched ? 'Esquecer processo' : 'Acompanhar processo'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderProcessDetails() {
    if (this.state.processNotFound) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <FontAwesome style={Styles.searchResultIcon} name="warning" />
            <Text style={Styles.searchResultLabel}>Processo não encontrado.</Text>
          </View>
        </View>
      );
    } else if (this.state.processDetails) {
      return <SectionList
        sections={this.state.processDetails}
        renderSectionHeader={({section}) => this.renderSectionHeader(section)}
        renderSectionFooter={({section}) => this.renderSectionFooter(section)}
        renderItem={({item}) => this.renderSectionItem(item)}
        style={Styles.sectionList}
      />;
    }
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <View style={Styles.searchContainer}>
            <Text style={Styles.h1}>Digite o número do processo</Text>
            <View style={Styles.centerContainer}>
              <TextInput
                value={this.state.processNumber}
                blurOnSubmit={true}
                returnKeyType="done"
                style={[Styles.inputTextMd, Styles.searchInputText]}
                onSubmitEditing={event => this.onSearch()}
                onChangeText={processNumber => this.setState({processNumber})} />
            </View>
            <TouchableOpacity style={Styles.searchButton} onPress={() => this.onSearch()}>
              <Text style={Styles.searchButtonCenter}>Consultar</Text>
            </TouchableOpacity>
          </View>
          {this.renderProcessDetails()}
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}