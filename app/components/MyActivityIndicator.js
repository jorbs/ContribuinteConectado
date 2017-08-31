import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

import Styles from '../common/Styles';

export default class MyActivityIndicator extends Component {
  render() {
    return (
        <View style={Styles.activityIndicatorContainer}>
          <ActivityIndicator />
          <Text style={Styles.requestingDataLabel}>Solicitando dados...</Text>
        </View>
    );
  }
};