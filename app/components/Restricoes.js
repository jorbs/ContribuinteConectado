import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Restricoes extends Component {
  static navigationOptions = {
    title: 'Restrições',
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

  async componentDidMount() {
    const {goBack} = this.props.navigation;
    const {params} = this.props.navigation.state;

    try {
      const response = await SefazAPI.obterRestricoes(params.requestToken, params.login);
      const restrictions = [];

      response.forEach(restriction => {
        restrictions.push({key: restrictions.length, title: 'Tipo', body: restriction.descricaoRestricao, icon: 'warning'});
        restrictions.push({key: restrictions.length, title: 'Competência', body: moment(restriction.dataCompetencia).utc().format(Constants.DATE_FORMAT)});
      });

      this.setState({restrictions});
    } catch (e) {
      Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]);
    } finally {
      this.setState({pendingRequest: false});
    }
  }

  renderRestrictions() {
    if (this.state.restrictions && this.state.restrictions.length === 0) {
      return (
        <View style={Styles.centerContainer}>
          <View style={[Styles.row, Styles.searchResult]}>
            <MaterialCommunityIcons style={Styles.searchResultIcon} name="alert-circle" />
            <Text style={Styles.searchResultLabel}>Nenhuma restrição encontrada.</Text>
          </View>
        </View>
      );
    } else if (this.state.restrictions) {
      return (
        <ScrollView style={Styles.mainContainer}>
          <FlatList data={this.state.restrictions} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />
        </ScrollView>
      );
    }
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
    return this.state.pendingRequest ? <MyActivityIndicator/> : this.renderRestrictions();
  }
}