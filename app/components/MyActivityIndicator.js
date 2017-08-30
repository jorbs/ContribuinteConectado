import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

import * as App from '../common/Styles';

export default class MyActivityIndicator extends Component {
  render() {
    return (
        <View style={App.styles.activityIndicatorContainer}>
          <ActivityIndicator />
          <Text style={App.styles.requestingDataLabel}>Solicitando dados...</Text>
        </View>
    );
  }
};