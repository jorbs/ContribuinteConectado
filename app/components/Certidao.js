import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Styles from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Certidao extends Component {
  static navigationOptions = {
    title: 'Certidões',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {pendingRequest: true};
  }

  mapDocumentType(documentType) {
    if (documentType === 'CP') {
      return {
        type: 'Certidão Positiva de Débito',
        icon: <FontAwesome name="times-circle" style={[Styles.itemLeftIcon, {color: 'red'}]} />
      };
    }

    if (documentType === 'CN') {
      return {
        type: 'Certidão Negativa de Débito',
        icon: <FontAwesome name="check-circle" style={Styles.itemLeftIcon} />
      };
    }

    return {
      type: 'Certidão Positiva com Efeito de Negativa',
      icon: <FontAwesome name="times-circle" style={Styles.itemLeftIcon} />
    };
  }

  componentDidMount() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    SefazAPI.consultarCnd(params.requestToken, params.login).then(response => {
      const documentType = this.mapDocumentType(response.tipoCertidao);
      const items = [
        {key: 'Tipo de Certidão', data: documentType.type, icon: documentType.icon},
        {key: 'Número do Documento', data: response.numeroDocumento},
        {key: 'Emissão', data: `${response.dataEmissao} ${response.horaEmissao}`},
        {key: 'Código de Autenticação', data: response.codigoAutenticacao}
      ];

      this.setState({items});
    }).catch((e) => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon || <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={Styles.itemPrimaryText}>{item.key}</Text>
            <Text style={Styles.itemSecondaryText}>{item.data}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={Styles.mainContainer}>
        <FlatList data={this.state.items} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />
      </View>
    );
  }
}