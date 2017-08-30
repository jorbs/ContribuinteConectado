import React, { Component } from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';

import * as App from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class SituacaoCadastral extends Component {
  static navigationOptions = {
    title: 'Situação Cadastral',
    headerStyle: App.styles.headerStyle,
    headerTitleStyle: App.styles.headerTitleStyle,
    headerTintColor: App.styles.headerTintColor,
    headerPressColorAndroid: App.styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {pendingRequest: true}
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;

    SefazAPI.obterContribuinte(params.requestToken, params.login).then(userData => {
      const dadosGerais = [
        {key: 'Razão Social', data: userData.razaoSocial},
        {key: 'Nome Fantasia', data: userData.nomeFantasia},
        {key: 'CNPJ', data: userData.cnpj},
        {key: 'Natureza Jurídica', data: userData.descricao},
        {key: 'Situação', data: userData.descricaoSituacaoCadastral},
      ];
      const endereco = [
        {key: 'Logradouro', data: userData.endereco},
        {key: 'Telefone', data: userData.numeroTelefone},
      ];

      this.setState({
        sections: [
          {title: 'Dados Gerais', image: require('../images/user-info-red.png'), data: dadosGerais},
          {title: 'Endereço', image: require('../images/geolocation-red.png'), data: endereco}
        ],
        pendingRequest: false
      });
    });
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