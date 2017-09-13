import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert, SectionList, Clipboard} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInputMask from 'react-native-text-input-mask';
import dismissKeyboard from 'dismissKeyboard';
import Modal from 'react-native-modal';
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
      monthYear: moment().subtract(1, 'month').format('MM/YYYY')
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
    if (this.state.monthYear == null || this.state.monthYear.length == 0 || !moment(this.state.monthYear, 'MM/YYYY').isValid()) {
      Alert.alert('Competência inválida.');
      return;
    }

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
            {key: 'Tributo', data: record.codigoTributo === Constants.ANTECIPADO ? 'Antecipado' : 'Fecoep'},
            {key: 'Valor', data: 'R$ ' + Number(record.valorAntecipado).toFixed(2).replace('.', ',')},
            {key: 'Vencimento', data: moment(record.dataVencimento, Constants.DATE_FORMAT).format(Constants.DATE_FORMAT)},
            {key: 'Detalhes', data: record.sequencialAntecipacao},
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
      this.setState({recordDetails, isModalVisible: true});
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  onCopyBarCode(barcode) {
    Clipboard.setString(barcode.replace(/\ /g, ''));
    Alert.alert('Código de barras copiado!');
  }

  renderRecordDetailsModal() {
    const recordDetails = this.state.recordDetails;

    return (
      <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({isModalVisible: false})}>
        {
          this.state.recordDetails.map(record => {
            const barcode = record.codigoBarras.replace(/\ /g, '').substring(0, 11) + '...' + record.codigoBarras.replace(/\ /g, '').substring(37);

            return (
              <View key={record.codigoTributo} style={Styles.modal}>
                <Text style={Styles.modalHeader}>{record.codigoTributo === Constants.ANTECIPADO ? 'Antecipado' : 'Fecoep'}</Text>
                <Text style={Styles.modalParagraph}>Competência: {record.competencia.toString().substring(4) + '/' + record.competencia.toString().substring(0, 4)}</Text>
                <Text style={Styles.modalParagraph}>Emissão: {moment(record.dataEmissao).utc().format(Constants.DATETIME_FORMAT)}</Text>
                <Text style={Styles.modalParagraph}>Vencimento: {moment(record.dataVencimento).utc().format(Constants.DATETIME_FORMAT)}</Text>
                {record.dataPagamento && <Text style={Styles.modalParagraph}>Pagamento: {moment(record.dataPagamento).utc().format(Constants.DATETIME_FORMAT)}</Text>}
                <Text style={Styles.modalParagraph}>Valor Principal: R$ {record.valorPrincipal.toFixed(2)}</Text>
                <Text style={Styles.modalParagraph}>Valor Principal: R$ {record.valorTotal.toFixed(2)}</Text>
                {!record.dataPagamento && <Text style={Styles.modalParagraph}>Código de Barras: {barcode}</Text>}
                {!record.dataPagamento && (
                  <TouchableOpacity onPress={() => this.onCopyBarCode(record.codigoBarras)} accessibilityLabel="Copiar código de barras">
                    <FontAwesome name="copy" style={Styles.iconBarcode} />
                  </TouchableOpacity>
                )}
              </View>
            );
          })
        }
      </Modal>
    );
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
    if (item.key === 'Detalhes') {
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
        <ScrollView style={Styles.mainContainer}>
          <View style={Styles.searchContainer}>
            <View style={Styles.searchRow}>
              <Text style={Styles.searchLabel}>Competência</Text>
              <View style={Styles.searchInputGroup}>
                <TextInputMask
                  mask={"[00]/[0000]"}
                  placeholder="MM/AAAA"
                  keyboardType="numeric"
                  returnKeyType="done"
                  blurOnSubmit={true}
                  defaultValue={this.state.monthYear}
                  onSubmitEditing={event => this.onSearch()}
                  onChangeText={monthYear => this.setState({monthYear})}
                  style={[Styles.inputTextMd, Styles.searchInputText]} />
                <FontAwesome name="calendar" style={Styles.searchFieldIcon} />
              </View>
            </View>
            <View style={Styles.searchButton}>
              <TouchableOpacity onPress={() => this.onSearch()}>
                <Text style={Styles.searchButtonCenter}>Consultar</Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.renderRecords()}
          {this.state.isModalVisible && this.renderRecordDetailsModal()}
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}