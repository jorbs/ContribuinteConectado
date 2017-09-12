import React, {Component} from 'react';
import {View, ScrollView, Text, SectionList, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
      const restrictions = response.map(restriction => {
        return {
          title: restriction.descricaoRestricao,
          icon: 'warning',
          data: [
            {key: 'Competência', data: moment(restriction.dataCompetencia).utc().format(Constants.DATE_FORMAT)},
            {key: 'Solução', data: restriction.solucao},
          ]
        };
      });

      this.setState({restrictions});
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

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <ScrollView style={Styles.mainContainer}>
        <SectionList
          sections={this.state.restrictions}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          style={Styles.sectionList}
        />
      </ScrollView>
    );
  }
}