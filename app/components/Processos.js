import React, {Component} from 'react';
import {View, Text, SectionList, Image, TouchableOpacity, TextInput, Alert} from 'react-native';

import Styles from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Processos extends Component {
  static navigationOptions = {
    title: 'Processos',
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

  onSearch() {
    if (this.state.processNumber == null || this.state.processNumber.length == 0) {
      Alert.alert('Número de processo inválido.');
      return;
    }

    this.setState({pendingRequest: true});

    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    SefazAPI.consultarPorNumeroProcesso(params.requestToken, this.state.processNumber).then(process => {
      const processDetails = [{
        title: process.descricaoAssunto,
        image: require('../images/sheet-red.png'),
        data: [
          {key: 'Interessado', data: process.nomeInteressado},
          {key: 'Acatado em', data: process.dataAcatamento},
          {key: 'Protocolado em', data: process.dataProtocolo},
          {key: 'Situação', data: process.situacao},
          {key: 'Setor', data: process.setor},
          {key: 'Última movimentação', data: process.ultimaMovimentacao},
        ]
      }];

      this.setState({processDetails});
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

  renderProcessDetails() {
    if (this.state.processDetails) {
      return <SectionList
        sections={this.state.processDetails}
        renderSectionHeader={({section}) => this.renderSectionHeader(section)}
        renderItem={({item}) => this.renderSectionItem(item)}
        style={Styles.sectionList}
      />;
    }
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={Styles.mainContainer}>
        <Text style={Styles.h1}>Digite o número do processo</Text>
        <View style={Styles.searchContainer}>
          <TextInput style={Styles.inputTextMd} onChangeText={(processNumber) => this.setState({processNumber})}>{this.state.date}</TextInput>
          <TouchableOpacity onPress={() => this.onSearch()}>
            <Text style={Styles.button}>Consultar</Text>
          </TouchableOpacity>
        </View>
        {this.renderProcessDetails()}
      </View>
    );
  }
}