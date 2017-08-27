import React, { Component } from 'react';
import { Text, ActivityIndicator, StyleSheet, View } from 'react-native';

export default class MyActivityIndicator extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ActivityIndicator />
          <Text style={styles.requestingData}>Solicitando dados...</Text>
        </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeff4',
  },
  requestingData: {
    marginLeft: 5,
    height: 18
  }
});