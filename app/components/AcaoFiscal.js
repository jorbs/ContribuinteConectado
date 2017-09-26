import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput, Alert, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';

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
        const serviceOrder = [
          {key: 'Emissão', data: moment(response.nomeInteressado).format('DD/MM/YYYY'), icon: 'flag'},
          {key: 'Status', data: response.statusOs.dsc},
          {key: 'Valor ICMS a recuperar', data: `R$ ${response.valIcmsRecuperar.toFixed(2)}`},
          {key: 'Baixa', data: moment(response.datBaixa).format(Constants.DATE_FORMAT)},
          {key: 'Data Inicial Auditoria', data: response.dataInicialPeriodoAuditado ? moment(response.dataInicialPeriodoAuditado).format(Constants.DATE_FORMAT) : '-'},
          {key: 'Data Final Auditoria', data: response.dataFinalPeriodoAuditado ? moment(response.dataFinalPeriodoAuditado).format(Constants.DATE_FORMAT) : '-'},
        ];

        this.setState({serviceOrder, serviceOrderNotFound: false});
      }
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <MaterialCommunityIcons name={item.icon} style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.key}</Text>
            <Text style={Styles.itemSecondaryText}>{item.data}</Text>
          </View>
          {item.watch && <TouchableOpacity onPress={() => this.onWatchProcess(item.watch.processNumber, item.watch.status)}>
            <MaterialCommunityIcons name={this.state.watched ? 'eye-off-outline' : 'eye-outline'} style={Styles.actionIcon}/>
          </TouchableOpacity>}
        </View>
      </View>
    );
  }

  renderServiceOrder() {
    if (this.state.serviceOrderNotFound) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <MaterialCommunityIcons style={Styles.searchResultIcon} name="alert-circle" />
            <Text style={Styles.searchResultLabel}>OS não encontrada.</Text>
          </View>
        </View>
      );
    } else if (this.state.serviceOrder) {
      return <FlatList data={this.state.serviceOrder} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />;
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
                  <Text style={Styles.formFieldLabel}>Número da OS</Text>
                  <TextInput
                    value={this.state.serviceOrderNumber}
                    blurOnSubmit={true}
                    returnKeyType="done"
                    onSubmitEditing={event => this.onSearch()}
                    onChangeText={serviceOrderNumber => this.setState({serviceOrderNumber})}
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
                {this.renderServiceOrder()}
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}