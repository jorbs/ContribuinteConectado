import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet, Alert} from 'react-native';
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
      return 'Certidão Positiva de Débito';
    }

    if (documentType === 'CN') {
      return 'Certidão Negativa de Débito';
    }

    return 'Certidão Positiva com Efeito de Negativa';
  }

  componentDidMount() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    SefazAPI.consultarCnd(params.requestToken, params.login).then(response => {
      const sections = [{
        title: this.mapDocumentType(response.tipoCertidao),
        icon: response.tipoCertidao === 'CN' ? 'check-circle' : 'times-circle',
        data: [
          {key: 'Número do Documento', data: response.numeroDocumento},
          {key: 'Emissão', data: `${response.dataEmissao} ${response.horaEmissao}`},
          {key: 'Código de Autenticação', data: response.codigoAutenticacao},
        ]
      }];

      this.setState({sections});
    }).catch((e) => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
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
    return (
      <View style={Styles.itemContainer}>
        <Text style={Styles.itemHeader}>{item.key}</Text>
        <Text style={Styles.itemBody}>{item.data}</Text>
      </View>
    );
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={Styles.mainContainer}>
        <SectionList
          sections={this.state.sections}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          style={Styles.sectionList}
        />
      </View>
    );
  }
}