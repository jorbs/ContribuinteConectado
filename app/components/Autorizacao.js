import React, { Component } from 'react';
import {WebView} from 'react-native';

import Styles from '../common/Styles';

export default class Autorizacao extends Component {
  static navigationOptions = {
    title: 'Autorização de Aplicativos',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  render() {
    const {params} = this.props.navigation.state;
    return <WebView source={{uri: params.authorizationUrl}} />;
  }

}