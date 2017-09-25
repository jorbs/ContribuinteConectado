import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, Alert, Linking, findNodeHandle} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInputState from 'react-native/lib/TextInputState'
import TextInputMask from 'react-native-text-input-mask';
import {Col, Row, Grid} from 'react-native-easy-grid';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Styles from '../common/Styles';
import Constants from '../common/Constants';
import Postos from '../common/Postos';

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

    this.setState({pendingRequest: true});

    SefazAPI.consultarTermosDeApreensao(params.requestToken, params.login, startDate, endDate).then(response => {
      let terms = [];

      response.forEach(term => {
        const phone = Postos[term.posto].phones[0].replace(/[\(\ \)\-]/g, '');
        
        terms.push({key: terms.length, title: 'Número do Termo', body: term.numeroTermo, icon: 'truck'});
        terms.push({key: terms.length, title: 'Status', body: term.status});
        terms.push({key: terms.length, title: 'Emissão', body: term.dataEmissao && moment(term.dataEmissao).utc().format(Constants.DATETIME_FORMAT)});
        terms.push({key: terms.length, title: 'Papel', body: term.papel});
        terms.push({key: terms.length, title: 'Posto', body: Postos[term.posto].name, phone});
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
        <View style={Styles.emptySearchContainer}>
          <View style={Styles.row}>
            <FontAwesome style={Styles.searchResultIcon} name="warning" />
            <Text style={Styles.searchResultLabel}>Nenhum resultado foi encontrado no período.</Text>
          </View>
        </View>
      );
    }

    return <FlatList data={this.state.terms} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />;
  }

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <MaterialCommunityIcons name={item.icon} style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.title}</Text>
            <Text style={Styles.itemSecondaryText}>{item.body}</Text>
          </View>
          {item.phone && <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phone}`)}>
            <MaterialCommunityIcons name="phone" style={Styles.itemRightIcon} />
          </TouchableOpacity>}
        </View>
      </View>
    );
  }

  render() {
    return (
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
                  {this.state.pendingRequest ? <ActivityIndicator style={Styles.activityIndicator} /> : <MaterialCommunityIcons name="magnify" style={Styles.searchButtonIcon} />}
                  <Text style={Styles.searchButton}>{this.state.pendingRequest ? 'Consultando...' : 'Consultar'}</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row size={75}>
              {this.renderTerms()}
            </Row>
          </Grid>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}