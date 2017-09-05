import React, { Component } from 'react';
import {View, Text, SectionList, Image, StyleSheet, Alert} from 'react-native';

import Styles from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class SituacaoCadastral extends Component {
  static navigationOptions = {
    title: 'Situação Cadastral',
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

  componentDidMount() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    SefazAPI.obterContribuinte(params.requestToken, params.login).then(response => {
      const dadosGerais = [
        {key: 'Razão Social', data: response.razaoSocial},
        {key: 'Nome Fantasia', data: response.nomeFantasia},
        {key: 'CNPJ', data: response.cnpj},
        {key: 'Natureza Jurídica', data: response.descricao},
        {key: 'Situação', data: response.descricaoSituacaoCadastral},
      ];
      const endereco = [
        {key: 'Logradouro', data: response.endereco},
        {key: 'Telefone', data: response.numeroTelefone},
      ];

      this.setState({
        sections: [
          {title: 'Dados Gerais', image: require('../images/sheet-red.png'), data: dadosGerais},
          {title: 'Endereço', image: require('../images/geolocation-red.png'), data: endereco}
        ]
      });
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