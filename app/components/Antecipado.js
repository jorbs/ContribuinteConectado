import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert, SectionList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Styles from '../common/Styles';
import Constants from '../common/Constants';
import MyActivityIndicator from './MyActivityIndicator';

export default class Antecipado extends Component {
  static navigationOptions = {
    title: 'Antecipados',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);

    const previousMonth = moment().subtract(1, 'month').format('MM');
    const currentYear = moment().year();

    this.state = {
      pendingRequest: false,
      monthYear: `${previousMonth}/${currentYear}`
    };
  }

  onSchedule() {
    const day = '28';
    const month = '09';
    const year = '2017';

    Alert.alert(
      'Alerta de Vencimento',
      `Deseja criar evento no calendário para o dia ${day}/${month}/${year}?`,
      [
        {text: 'Cancelar'},
        {text: 'OK', onPress: () => this.setState({rememberAntecipado: true})},
      ]
    );
  }

  onSearch() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;
    
    this.setState({pendingRequest: true});

    SefazAPI.consultarValoresAntecipados(params.requestToken, params.login, this.state.monthYear).then(response => {
      const records = response.map(record => {
        return {
          key: record.sequencialAntecipacao,
          icon: 'money',
          title: `Antecipado N\u00BA ${record.sequencialAntecipacao}`,
          data: [
            {key: 'Código do Tributo', data: record.codigoTributo},
            {key: 'Valor', data: 'R$ ' + Number(record.valorAntecipado).toFixed(2).replace('.', ',')},
            {key: 'Vencimento', data: moment(record.dataVencimento, Constants.DATE_FORMAT).format(Constants.DATE_FORMAT)},
            {key: 'Detalhes', data: record.sequencialAntecipacao, touchable: true},
          ]
        };
      });

      this.setState({records});
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  onViewRecordDetails(recordId) {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    this.setState({pendingRequest: true});

    SefazAPI.consultarAntecipado(params.requestToken, params.login, recordId).then(recordDetails => {
      this.setState({pendingRequest: false});
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderSectionHeader(section) {
    return (
      <View style={Styles.sectionHeaderContainer}>
        <FontAwesome name={section.icon} size={24} style={Styles.sectionHeaderIcon} />
        <Text style={Styles.sectionHeader}>{section.title}</Text>
      </View>
    );
  }

  renderSectionItem(item) {
    if (item.touchable) {
      return (
        <TouchableOpacity onPress={() => this.onViewRecordDetails(item.data)}>
          <Text style={Styles.itemHeader}>{item.key}</Text>
          <Text style={Styles.itemBody}>{item.data}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={Styles.itemContainer}>
        <Text style={Styles.itemHeader}>{item.key}</Text>
        <Text style={Styles.itemBody}>{item.data}</Text>
      </View>
    );
  }

  renderRecords() {
    if (this.state.records == null) {
      return null;
    }

    if (this.state.records.length === 0) {
      return (
        <View>
          <Text style={Styles.searchResultLabel}>Nenhum resultado foi encontrado no período.</Text>
        </View>
      );
    }

    return <SectionList
      sections={this.state.records}
      renderSectionHeader={({section}) => this.renderSectionHeader(section)}
      renderItem={({item}) => this.renderSectionItem(item)}
      style={Styles.sectionList}
    />;
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={Styles.mainContainer}>
          <View style={Styles.searchContainer}>
            <View style={Styles.searchRow}>
              <Text style={Styles.searchLabel}>Competência</Text>
              <View style={Styles.searchInputGroup}>
                <TextInput
                  placeholder="mm/aaaa"
                  defaultValue={this.state.monthYear}
                  onChange={monthYear => this.setState(monthYear)}
                  style={[Styles.inputTextMd, Styles.searchInputText]} />
                <FontAwesome name="calendar" style={Styles.searchFieldIcon} />
              </View>
            </View>
            <TouchableOpacity style={Styles.searchButton} onPress={() => this.onSearch()}>
              <Text style={Styles.searchButtonCenter}>Consultar</Text>
            </TouchableOpacity>
          </View>
          {this.renderRecords()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}