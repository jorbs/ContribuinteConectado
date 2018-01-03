import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class PendenciasCertidao extends Component {
  static navigationOptions = {
    title: 'Pendências',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    activeBackgroundColor: '#113A7E',
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {pendingRequest: true};
  }

  async componentDidMount() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    try {
      const response = await SefazAPI.consultarPendencias(params.requestToken, params.login);
      let pendencias = [];

      if (response && response.pendenciaDados) {
        response.pendenciaDados.pendenciasDebitoIcms.forEach(pa => {
          pendencias.push({key: pendencias.length, title: 'Administrativa', body: pa.descricao, icon: 'warning'});
          pendencias.push({key: pendencias.length, title: 'Número', body: pa.numero});
          pendencias.push({key: pendencias.length, title: 'Valor Principal', body: `R$ ${pa.valorPrincipal}`});
          pendencias.push({key: pendencias.length, title: 'Valor da Multa', body: `R$ ${pa.valorMulta}`});
          pendencias.push({key: pendencias.length, title: 'Número da Certidão', body: pa.numeroCertidao});
        });

        response.pendenciaDados.pendenciasDebitoIcms.forEach(pa => {
          pendencias.push({key: pendencias.length, title: 'Débito ICMS', body: pa.descricao, icon: 'warning'});
          pendencias.push({key: pendencias.length, title: 'Número', body: pa.numero});
          pendencias.push({key: pendencias.length, title: 'Valor Principal', body: `R$ ${pa.valorPrincipal}`});
          pendencias.push({key: pendencias.length, title: 'Valor da Multa', body: `R$ ${pa.valorMulta}`});
          pendencias.push({key: pendencias.length, title: 'Número da Certidão', body: pa.numeroCertidao});
        });

        response.pendenciaDados.pendenciasDebitoIpva.forEach(pa => {
          pendencias.push({key: pendencias.length, title: 'Débito IPVA', body: pa.descricao, icon: 'warning'});
          pendencias.push({key: pendencias.length, title: 'Número', body: pa.numero});
          pendencias.push({key: pendencias.length, title: 'Valor Principal', body: `R$ ${pa.valorPrincipal}`});
          pendencias.push({key: pendencias.length, title: 'Valor da Multa', body: `R$ ${pa.valorMulta}`});
          pendencias.push({key: pendencias.length, title: 'Número da Certidão', body: pa.numeroCertidao});
        });

        response.pendenciaDados.pendenciasParcelamento.forEach(pa => {
          pendencias.push({key: pendencias.length, title: 'Parcelamento', body: pa.descricao, icon: 'warning'});
          pendencias.push({key: pendencias.length, title: 'Número', body: pa.numero});
          pendencias.push({key: pendencias.length, title: 'Valor Principal', body: `R$ ${pa.valorPrincipal}`});
          pendencias.push({key: pendencias.length, title: 'Valor da Multa', body: `R$ ${pa.valorMulta}`});
          pendencias.push({key: pendencias.length, title: 'Número da Certidão', body: pa.numeroCertidao});
        });
      }

      this.setState({pendencias});
    } catch (e) {
      Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]);
    } finally {
      this.setState({pendingRequest: false});      
    }
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

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <FontAwesome name={item.icon} style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.title}</Text>
            <Text style={Styles.itemSecondaryText}>{item.body}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <ScrollView style={Styles.mainContainer}>
        <FlatList data={this.state.pendencias} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />
      </ScrollView>
    );
  }
}