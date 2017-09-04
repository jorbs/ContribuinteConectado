import React, {Component} from 'react';
import {View, Text, SectionList, Image} from 'react-native';
import moment from 'moment';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class RestricoesPendencias extends Component {
  static navigationOptions = {
    title: 'Restrições e Pendências',
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
    const {params} = this.props.navigation.state;
    const response = await SefazAPI.obterRestricoes(params.requestToken, params.login);
    const restrictions = response.map(restriction => {
      return {
        title: restriction.descricaoRestricao,
        image: require('../images/sheet-red.png'),
        data: [
          {key: 'Competência', data: moment(restriction.dataCompetencia).utc().format(Constants.DATE_FORMAT)},
          {key: 'Solução', data: restriction.solucao},
        ]
      };
    });

    /*const pendencies = await SefazAPI.consultarPendencias(params.requestToken, params.login).map(pendency => {
      return {
        title: pendency
      };
    });*/

    this.setState({
      restrictions,
      pendingRequest: false
    });
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
          sections={this.state.restrictions}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          style={Styles.sectionList}
        />
      </View>
    );
  }
}  