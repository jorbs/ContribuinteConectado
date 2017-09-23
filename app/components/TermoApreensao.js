import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, SectionList, TouchableOpacity, TouchableWithoutFeedback, Alert, Linking, findNodeHandle} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputState from 'react-native/lib/TextInputState'
import TextInputMask from 'react-native-text-input-mask';
import {Col, Row, Grid} from 'react-native-easy-grid';
import dismissKeyboard from 'dismissKeyboard';
import Modal from 'react-native-modal';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Styles from '../common/Styles';
import Constants from '../common/Constants';
import Postos from '../common/Postos';
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
      isModalVisible: false,
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
          action: Postos[term.posto],
          icon: 'file-text-o',
          data: [
            {key: 'Status', data: term.status},
            {key: 'Emissão', data: term.dataEmissao && moment(term.dataEmissao).utc().format(Constants.DATETIME_FORMAT)},
            {key: 'Papel', data: term.papel},
            {key: 'Posto', data: Postos[term.posto].name},
          ]
        }
      });

      this.setState({terms});
    }).catch(e => Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]))
      .then(() => this.setState({pendingRequest: false}));
  }

  renderTerms() {
    if (this.state.terms == null) {
      return null;
    }

    if (this.state.terms.length === 0) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <FontAwesome style={Styles.searchResultIcon} name="warning" />
            <Text style={Styles.searchResultLabel}>Nenhum resultado foi encontrado no período.</Text>
          </View>
        </View>
      );
    }

    return (
      <View>
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <Text style={Styles.searchResultLabel}>
              {this.state.terms.length} {this.state.terms.length === 1 ? 'resultado foi encontrado.' : 'resultados foram encontrados.'}
            </Text>
          </View>
        </View>
        <SectionList
          sections={this.state.terms}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          renderSectionFooter={({section}) => this.renderSectionFooter(section)}
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

  renderSectionFooter(section) {
    return (
      <View style={Styles.action}>
        <TouchableOpacity onPress={() => this.setState({isModalVisible: true, posto: section.action})} style={Styles.actionButton}>
          <FontAwesome name="search" style={Styles.actionIcon} />
          <Text style={Styles.actionLabel}>Visualizar detalhes</Text>
        </TouchableOpacity>
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

  renderDetailsModal() {
    if (this.state.posto) {
      return (
        <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({isModalVisible: false})}>
          <View style={Styles.modal}>
            <Text style={Styles.modalHeader}>{this.state.posto.name}</Text>
            <Text style={Styles.modalParagraph}>Endereço: {this.state.posto.address}</Text>
            <Text style={Styles.modalParagraph}>Telefones:</Text>
            {this.state.posto.phones.map(phone => {
              return (
                <View key={phone} style={Styles.action}>
                  <TouchableOpacity style={Styles.actionButton} onPress={() => Linking.openURL(`tel:${phone.replace(/[\(\ \)\-]/g, '')}`)}>
                    <FontAwesome name="phone" size={18} style={Styles.actionIcon}/>
                    <Text style={Styles.actionLabel}>{phone}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </Modal>
      );
    }
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <Grid>
            <Row size={25}>
              <Col style={Styles.searchContainer}>
                <View style={Styles.row}>
                  <View style={[Styles.row, {marginRight: 32}]}>
                    <MaterialCommunityIcons name="calendar" style={Styles.formInputIcon} />
                    <View>
                      <Text style={Styles.formFieldLabel}>Data início</Text>
                      <TextInputMask
                        mask="[00]/[00]/[0000]"
                        placeholder="DD/MM/YYYY"
                        keyboardType="numeric"
                        defaultValue={this.state.startDate}
                        returnKeyType="next"
                        blurOnSubmit={true}
                        onSubmitEditing={event => TextInputState.focusTextInput(findNodeHandle(this.refs.endDate))}
                        onChangeText={startDate => this.setState({startDate})}
                        style={[Styles.inputTextDate, Styles.textCenter, Styles.formInputText]} />
                      </View>
                  </View>
                  <View style={Styles.row}>
                    <MaterialCommunityIcons name="calendar" style={Styles.formInputIcon} />
                    <View>
                      <Text style={Styles.formFieldLabel}>Data término</Text>
                      <TextInputMask
                        ref="endDate"
                        mask={"[00]/[00]/[0000]"}
                        placeholder="DD/MM/YYYY"
                        keyboardType="numeric"
                        defaultValue={this.state.endDate}
                        returnKeyType="done"
                        blurOnSubmit={true}
                        onSubmitEditing={event => this.onSearch()}
                        onChangeText={endDate => this.setState({endDate})}
                        style={[Styles.inputTextDate, Styles.textCenter, Styles.formInputText]} />
                      </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => this.onSearch()} style={[Styles.row, Styles.searchButtonContainer]} disable={this.state.pendingRequest}>
                  {this.state.pendingRequest ? <ActivityIndicator /> : <MaterialCommunityIcons name="magnify" style={Styles.searchButtonIcon} />}
                  <Text style={Styles.searchButton}>{this.state.pendingRequest ? 'Buscando termos...' : 'Buscar termos'}</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row size={75}>
              {this.renderTerms()}
              {this.renderDetailsModal()}
            </Row>
          </Grid>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}