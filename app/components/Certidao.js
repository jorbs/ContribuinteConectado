import React, { Component } from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';

import * as App from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Certidao extends Component {
  static navigationOptions = {
    title: 'Certidões',
    headerStyle: App.styles.headerStyle,
    headerTitleStyle: App.styles.headerTitleStyle,
    headerTintColor: App.styles.headerTintColor,
    headerPressColorAndroid: App.styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {pendingRequest: true};
  }

  mapDocumentType(documentType) {
    if (documentType === 'CP') {
      return 'Certidão Positiva';
    }

    if (documentType === 'CN') {
      return 'Certidão Negativa';
    }

    return 'Certidão Positiva com Efeito de Negativa';
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    const okImage = require('../images/ok-red.png');
    const notOkImage = require('../images/not-ok-red.png');

    SefazAPI.consultarCnd(params.requestToken, params.login).then(response =>
      this.setState({
        pendingRequest: false,
        sections: [{
          title: this.mapDocumentType(response.tipoCertidao),
          image: response.tipoCertidao === 'CN' ? notOkImage : okImage,
          data: [
            {key: 'Número do Documento', data: response.numeroDocumento},
            {key: 'Emissão', data: `${response.dataEmissao} ${response.horaEmissao}`},
            {key: 'Código de Autenticação', data: response.codigoAutenticacao},
          ]
        }]
      })
    );
  }

  renderSectionHeader(section) {
    return (
      <View style={App.styles.sectionHeaderContainer}>
        <Image source={section.image} resizeMode={'contain'} style={App.styles.sectionHeaderImage}/>
        <Text style={App.styles.sectionHeader}>{section.title}</Text>
      </View>
    );
  }

  renderSectionItem(item) {
    return (
      <View style={App.styles.itemContainer}>
        <Text style={App.styles.itemHeader}>{item.key}</Text>
        <Text style={App.styles.itemBody}>{item.data}</Text>
      </View>
    );
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={App.styles.mainContainer}>
        <SectionList
          sections={this.state.sections}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          style={App.styles.sectionList}
        />
      </View>
    );
  }
}