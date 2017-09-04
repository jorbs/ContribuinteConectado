import React, {Component} from 'react';
import { View, Text, SectionList, Image, StyleSheet, TouchableOpacity, DatePickerAndroid } from 'react-native';
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
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    const {startDate, endDate} = this.state;

    SefazAPI.consultarTermosDeApreensao(params.requestToken, params.login, startDate, endDate).then(response => {
      const terms = response.map(term => {
        return {
          title: `Termo ${term.numeroTermo}`,
          image: require('../images/sheet-red.png'),
          data: [
            {key: 'Status', data: term.status},
            {key: 'Emissão', data: moment(term.dataEmissao).utc().format(Constants.DATETIME_FORMAT)},
            {key: 'Papel', data: term.papel},
            {key: 'Posto', data: term.posto, detail: 'Detalhes'},
          ]
        }
      });

      this.setState({terms});

      // Linking.openURL('tel:+5582996741312')
    });
  }

  renderTerms() {
    if (this.state.terms == null) {
      return (
        <View>
          <Text style={Styles.searchResultLabel}>Nenhum termo de apreensão foi encontrado no período.</Text>
        </View>
      );
    }

    return (
      <View>
        <Text style={Styles.searchResultLabel}>
          {this.state.terms.length} {this.state.terms.length === 1 ? 'termo de apreensão foi encontrado.' : 'termos de apreensão foram encontrados.'}
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
        <Image source={section.image} resizeMode={'contain'} style={Styles.sectionHeaderImage}/>
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

  async renderDatePicker(target) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: target === 'start' ? this.state.startDate.toDate() : this.state.endDate.toDate()
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = moment(new Date(year, month, day));

        if (target === 'start') {
          this.setState({startDate: selectedDate});
        } else {
          this.setState({endDate: selectedDate});
        }
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    return (this.state.pendingRequest ?
      <MyActivityIndicator/> :
      <View style={Styles.mainContainer}>
        <Text style={Styles.h1}>Período</Text>
        <View style={Styles.searchContainer}>
          <TouchableOpacity onPress={() => this.renderDatePicker('start')}>
            <Text style={Styles.button}>{this.state.startDate.format(Constants.DATE_FORMAT)}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.renderDatePicker('end')}>
            <Text style={[Styles.button, Styles.buttonLast]}>{this.state.endDate.format(Constants.DATE_FORMAT)}</Text>
          </TouchableOpacity>
        </View>
        {this.renderTerms()}
      </View>
    );
  }
}