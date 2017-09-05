import React, {Component} from 'react';
import {View, Text, SectionList, Image} from 'react-native';
import moment from 'moment';

import * as SefazAPI from '../api/SefazAPI';
import Styles from '../common/Styles';
import Constants from '../common/Constants';
import MyActivityIndicator from './MyActivityIndicator';

export default class CallCenter extends Component {
  static navigationOptions = {
    title: 'Call Center',
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
    const {params} = this.props.navigation.state;

    console.log(params);
    
    SefazAPI.listarChamados(params.requestToken).then(response => {
      console.log(response);
      const tickets = response.map(ticket => {
        return {
          title: `${ticket.titulo} (ID: ${ticket.id})`,
          image: require('../images/sheet-red.png'),
          data: [
            {key: 'Solução', data: ticket.solucao},
            {key: 'Aberto em', data: ticket.dataAbertura && moment(ticket.dataAbertura).utc().format(Constants.DATETIME_FORMAT)},
            {key: 'Agendado em', data: ticket.dataAgendamento && moment(ticket.dataAgendamento).utc().format(Constants.DATETIME_FORMAT)},
            {key: 'Fechado em', data: ticket.dataFechamento && moment(ticket.dataFechamento).utc().format(Constants.DATETIME_FORMAT)},
          ]
        };
      });

      this.setState({
        tickets,
        pendingRequest: false,
      });
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
    if (item.data) {
      return (
        <View style={Styles.itemContainer}>
          <Text style={Styles.itemHeader}>{item.key}</Text>
          <Text style={Styles.itemBody}>{item.data}</Text>
        </View>
      );
    }
    
    return null;
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={Styles.mainContainer}>
        <SectionList
          sections={this.state.tickets}
          renderSectionHeader={({section}) => this.renderSectionHeader(section)}
          renderItem={({item}) => this.renderSectionItem(item)}
          style={Styles.sectionList}
        />
      </View>
    );
  }
}