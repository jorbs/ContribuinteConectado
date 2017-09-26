import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, Alert, FlatList, Clipboard} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInputMask from 'react-native-text-input-mask';
import {Col, Row, Grid} from 'react-native-easy-grid';
import dismissKeyboard from 'dismissKeyboard';
import Modal from 'react-native-modal';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Styles from '../common/Styles';
import Constants from '../common/Constants';

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
      month: moment().subtract(1, 'month').format('MM/YYYY')
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    params.screenParam && this.setState({month: params.screenParam});
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
    if (this.state.month == null || this.state.month.length == 0 || !moment(this.state.month, 'MM/YYYY').isValid()) {
      Alert.alert('Competência inválida.');
      return;
    }

    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;
    
    this.setState({pendingRequest: true});

    SefazAPI.consultarValoresAntecipados(params.requestToken, params.login, this.state.month).then(response => {
      const records = [];
      
      response.forEach(record => {
        records.push({key: records.length, title: "N\u00BA Antecipado", body: record.sequencialAntecipacao, icon: 'money', data: record.sequencialAntecipacao});
        records.push({key: records.length, title: 'Tributo', body: record.codigoTributo === Constants.ANTECIPADO ? 'Antecipado' : 'Fecoep'});
        records.push({key: records.length, title: 'Valor', body: 'R$ ' + Number(record.valorAntecipado).toFixed(2).replace('.', ',')});
        records.push({key: records.length, title: 'Vencimento', body: moment(record.dataVencimento).utc().format(Constants.DATE_FORMAT)});
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
                <Text style={Styles.modalParagraph}>Emissão: {moment(record.dataEmissao).utc().format(Constants.DATE_FORMAT)}</Text>
                <Text style={Styles.modalParagraph}>Vencimento: {moment(record.dataVencimento).utc().format(Constants.DATE_FORMAT)}</Text>
                {record.dataPagamento && <Text style={Styles.modalParagraph}>Pagamento: {moment(record.dataPagamento).utc().format(Constants.DATETIME_FORMAT)}</Text>}
                <Text style={Styles.modalParagraph}>Valor Principal: R$ {record.valorPrincipal.toFixed(2)}</Text>
                <Text style={Styles.modalParagraph}>Valor Principal: R$ {record.valorTotal.toFixed(2)}</Text>
                {!record.dataPagamento && <Text style={Styles.modalParagraph}>Código de Barras: {barcode}</Text>}
                {!record.dataPagamento && (
                  <View style={Styles.action}>
                    <TouchableOpacity onPress={() => this.onCopyBarCode(record.codigoBarras)} accessibilityLabel="Copiar código de barras" style={Styles.actionButton}>
                      <MaterialCommunityIcons name="barcode" style={Styles.actionIcon} />
                      <Text style={Styles.actionLabel}>Copiar código de barras</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            );
          })
        }
      </Modal>
    );
  }

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <FontAwesome name={item.icon} style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.title}</Text>
            <Text style={Styles.itemSecondaryText}>{item.body}</Text>
          </View>
          {item.data && <TouchableOpacity onPress={() => this.onViewRecordDetails(item.data)}>
            <MaterialCommunityIcons name="information-outline" style={Styles.itemRightIcon} />
          </TouchableOpacity>}
        </View>
      </View>
    );
  }

  renderRecords() {
    if (this.state.records.length === 0) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <MaterialCommunityIcons style={Styles.searchResultIcon} name="alert-circle" />
            <Text style={Styles.searchResultLabel}>Nenhum resultado foi encontrado no período.</Text>
          </View>
        </View>
      );
    }

    return <FlatList data={this.state.records} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <Grid>
            <Row size={25}>
              <Col style={Styles.searchContainer}>
                <View style={[Styles.row, {marginRight: 32}]}>
                  <MaterialCommunityIcons name="calendar" style={Styles.formInputIcon} />
                  <View>
                    <Text style={Styles.formFieldLabel}>Competência</Text>
                    <TextInputMask
                      mask={"[00]/[0000]"}
                      placeholder="MM/AAAA"
                      keyboardType="numeric"
                      returnKeyType="done"
                      blurOnSubmit={true}
                      defaultValue={this.state.month}
                      onSubmitEditing={event => this.onSearch()}
                      onChangeText={month => this.setState({month})}
                      style={[Styles.inputTextDate, Styles.textCenter, Styles.formInputText]} />
                  </View>
                </View>
                <TouchableOpacity onPress={() => this.onSearch()} style={[Styles.row, Styles.searchButtonContainer]} disable={this.state.pendingRequest}>
                  {this.state.pendingRequest ? <ActivityIndicator style={Styles.activityIndicator} /> : <MaterialCommunityIcons name="magnify" style={Styles.searchButtonIcon} />}
                  <Text style={Styles.searchButton}>{this.state.pendingRequest ? 'Consultando...' : 'Consultar'}</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row size={75}>
              <Col>
                {this.state.records && this.renderRecords()}
                {this.state.isModalVisible && this.renderRecordDetailsModal()}
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}