import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Alert, DatePickerAndroid, SectionList, Image} from 'react-native';
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
    this.state = {
      pendingRequest: false,
      date: moment().subtract(1, 'month').format('MM')
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

  async renderDatePicker() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = moment(new Date(year, month, day));

        this.setState({date: selectedDate.format('MM')});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  onSearch() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;
    
    this.setState({pendingRequest: true});

    SefazAPI.consultarValoresAntecipados(params.requestToken, params.login, this.state.date).then(response => {
      const records = response.map(record => {
        return {
          key: record.sequencialAntecipacao,
          image: require('../images/sheet-red.png'),
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
        <Image source={section.image} resizeMode={'contain'} style={Styles.sectionHeaderImage}/>
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
    if (this.state.records) {
      return <SectionList
        sections={this.state.records}
        renderSectionHeader={({section}) => this.renderSectionHeader(section)}
        renderItem={({item}) => this.renderSectionItem(item)}
        style={Styles.sectionList}
      />;
    }

    return null;
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={Styles.mainContainer}>
        <Text style={Styles.h1}>Competência</Text>
        <View style={Styles.searchContainer}>
          <TouchableOpacity onPress={() => this.renderDatePicker()}>
            <Text style={Styles.button}>{this.state.date}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSearch()}>
            <Text style={Styles.button}>Consultar</Text>
          </TouchableOpacity>
        </View>
        {this.renderRecords()}
      </View>
    );
  }
}