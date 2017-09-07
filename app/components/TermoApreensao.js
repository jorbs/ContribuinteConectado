import React, {Component} from 'react';
import {View, Text, TextInput, SectionList, TouchableOpacity, TouchableWithoutFeedback, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInputMask from 'react-native-text-input-mask';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Styles from '../common/Styles';
import Constants from '../common/Constants';
import MyActivityIndicator from './MyActivityIndicator';

export default class TermoApreensao extends Component {
  static navigationOptions = {
    title: 'Termos de Apreensão',
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
      startDate: moment().subtract(1, 'month').format(Constants.DATE_FORMAT),
      endDate: moment().format(Constants.DATE_FORMAT),
    };
  }

  onSearch() {
    if (this.state.startDate == null || this.state.startDate.length == 0 || !moment(this.state.startDate, 'DD/MM/YYYY').isValid()) {
      Alert.alert('Data início inválida.');
      return;
    }

    if (this.state.endDate == null || this.state.endDate.length == 0 || !moment(this.state.endDate, 'DD/MM/YYYY').isValid()) {
      Alert.alert('Data término inválida.');
      return;
    }

    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;
    const {startDate, endDate} = this.state;

    SefazAPI.consultarTermosDeApreensao(params.requestToken, params.login, startDate, endDate).then(response => {
      const terms = response.map(term => {
        return {
          title: `Termo ${term.numeroTermo}`,
          icon: 'file-text-o',
          data: [
            {key: 'Status', data: term.status},
            {key: 'Emissão', data: term.dataEmissao && moment(term.dataEmissao).utc().format(Constants.DATETIME_FORMAT)},
            {key: 'Papel', data: term.papel},
            {key: 'Posto', data: term.posto, detail: 'Detalhes'},
          ]
        }
      });

      this.setState({terms});

      // Linking.openURL('tel:+5582996741312')
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderTerms() {
    if (this.state.terms == null) {
      return null;
    }

    if (this.state.terms.length === 0) {
      return (
        <View>
          <Text style={Styles.searchResultLabel}>Nenhum resultado foi encontrado no período.</Text>
        </View>
      );
    }

    return (
      <View>
        <Text style={Styles.searchResultLabel}>
          {this.state.terms.length} {this.state.terms.length === 1 ? 'resultado foi encontrado.' : 'resultados foram encontrados.'}
        </Text>
        <SectionList
          sections={this.state.terms}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          style={Styles.sectionList} />
      </View>
    );
  }

  renderSectionHeader(section) {
    return (
      <View style={Styles.sectionHeaderContainer}>
        <FontAwesome name={section.icon} size={24} style={Styles.sectionHeaderIcon} />
        <Text style={Styles.sectionHeader}>{section.title}</Text>
      </View>
    );
  }

  renderSectionItemData(item) {
    if (item.detail) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.itemBody}>{item.data}</Text>
          <TouchableOpacity onPress={() => console.log('detail!')}>
            <Text style={{marginLeft: 20, marginTop: 3, color: '#0a235f'}}>{item.detail}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return <Text style={Styles.itemBody}>{item.data}</Text>;
  }

  renderSectionItem(item) {
    return (
      <View style={Styles.itemContainer}>
        <Text style={Styles.itemHeader}>{item.key}</Text>
        {this.renderSectionItemData(item)}
      </View>
    );
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={Styles.mainContainer}>
          <View style={Styles.searchContainer}>
            <View style={Styles.searchRow}>
              <Text style={Styles.searchLabel}>Data início</Text>
              <View style={Styles.searchInputGroup}>
                <TextInputMask
                  mask={"[00]/[00]/[0000]"}
                  placeholder="DD/MM/YYYY"
                  keyboardType="numeric"
                  defaultValue={this.state.startDate}
                  onChangeText={startDate => this.setState({startDate})}
                  style={[Styles.inputTextMd, Styles.searchInputText]} />
                <FontAwesome name="calendar" style={Styles.searchFieldIcon} />
              </View>
            </View>
            <View style={Styles.searchRow}>
              <Text style={Styles.searchLabel}>Data término</Text>
              <View style={Styles.searchInputGroup}>
                <TextInputMask
                  mask={"[00]/[00]/[0000]"}
                  placeholder="DD/MM/YYYY"
                  keyboardType="numeric"
                  defaultValue={this.state.endDate}
                  onChangeText={endDate => this.setState({endDate})}
                  style={[Styles.inputTextMd, Styles.searchInputText]} />
                <FontAwesome name="calendar" style={Styles.searchFieldIcon} />
              </View>
            </View>
            <View style={Styles.searchButton}>
              <TouchableOpacity onPress={() => this.onSearch()}>
                <Text style={Styles.searchButtonCenter}>Buscar termos</Text>
              </TouchableOpacity>
            </View>
            {this.renderTerms()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}