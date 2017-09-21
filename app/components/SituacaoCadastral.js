import React, { Component } from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
      const items = [
        {key: 'Dados Gerais', subheading: true},
        {key: 'Razão Social', data: response.razaoSocial, icon: 'file-text-o'},
        {key: 'Nome Fantasia', data: response.nomeFantasia},
        {key: 'CNPJ', data: response.cnpj},
        {key: 'Natureza Jurídica', data: response.descricao},
        {key: 'Situação', data: response.descricaoSituacaoCadastral},
        {key: 'Logradouro', data: response.endereco, icon: 'map-marker'},
        {key: 'Telefone', data: response.numeroTelefone},
      ];

      this.setState({items});
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderItem(item) {
    if (item.subheading) {
      return <Text style={Styles.subheading}>{item.key}</Text>
    }
    
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <FontAwesome name={item.icon} style={Styles.itemIcon} /> : <Text style={Styles.itemIcon} />}
        <View style={Styles.itemTextContainer}>
          <Text style={Styles.itemPrimaryText}>{item.key}</Text>
          <Text style={Styles.itemSecondaryText}>{item.data}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <ScrollView style={Styles.mainContainer}>
        <FlatList data={this.state.items} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />
      </ScrollView>
    );
  }
}