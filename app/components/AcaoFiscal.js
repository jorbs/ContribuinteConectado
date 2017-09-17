import React, {Component} from 'react';
import {View, ScrollView, Text, SectionList, TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class AcaoFiscal extends Component {
  static navigationOptions = {
    title: 'Ações Fiscais',
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

  async onSearch() {
    if (this.state.serviceOrderNumber == null || this.state.serviceOrderNumber.length == 0) {
      Alert.alert('Número de OS inválido.');
      return;
    }

    this.setState({pendingRequest: true});

    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    SefazAPI.consultarOs(params.requestToken, params.login, this.state.serviceOrderNumber).then(response => {
      if (response == null || Object.keys(response).length == 0) {
        this.setState({serviceOrderNotFound: true});
      } else {
        const serviceOrder = [{
          title: response.num,
          icon: 'flag',
          data: [
            {key: 'Emissão', data: moment(response.nomeInteressado).format('DD/MM/YYYY')},
            {key: 'Status', data: response.statusOs.dsc},
            {key: 'Valor ICMS a recuperar', data: `R$ ${response.valIcmsRecuperar.toFixed(2)}`},
            {key: 'Baixa', data: moment(response.datBaixa).format(Constants.DATE_FORMAT)},
            {key: 'Data Inicial Auditoria', data: response.dataInicialPeriodoAuditado ? moment(response.dataInicialPeriodoAuditado).format(Constants.DATE_FORMAT) : '-'},
            {key: 'Data Final Auditoria', data: response.dataFinalPeriodoAuditado ? moment(response.dataFinalPeriodoAuditado).format(Constants.DATE_FORMAT) : '-'},
          ]
        }];

        this.setState({serviceOrder, serviceOrderNotFound: false});
      }
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderSectionHeader(section) {
    return (
      <View style={Styles.sectionHeaderContainer}>
        <Entypo name={section.icon} size={24} style={Styles.sectionHeaderIcon} />
        <Text style={Styles.sectionHeader}>Ação {section.title}</Text>
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
    return null;
  }

  renderServiceOrder() {
    if (this.state.serviceOrderNotFound) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <FontAwesome style={Styles.searchResultIcon} name="warning" />
            <Text style={Styles.searchResultLabel}>OS não encontrada.</Text>
          </View>
        </View>
      );
    } else if (this.state.serviceOrder) {
      return <SectionList
        sections={this.state.serviceOrder}
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
            <Text style={Styles.h1}>Digite o número da OS</Text>
            <View style={Styles.centerContainer}>
              <TextInput
                value={this.state.serviceOrderNumber}
                blurOnSubmit={true}
                returnKeyType="done"
                style={[Styles.inputTextMd, Styles.searchInputText]}
                onSubmitEditing={event => this.onSearch()}
                onChangeText={serviceOrderNumber => this.setState({serviceOrderNumber})} />
            </View>
            <TouchableOpacity style={Styles.searchButton} onPress={() => this.onSearch()}>
              <Text style={Styles.searchButtonCenter}>Consultar</Text>
            </TouchableOpacity>
          </View>
          {this.renderServiceOrder()}
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}