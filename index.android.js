import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Home from './app/components/Home';

export default class ContribuinteConectado extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setUserInfo(login, requestToken) {
    this.setState({
      requestToken,
      login
    });
  }

  render() {
    return <Home setUserInfo={(login, requestToken) => this.setUserInfo(login, requestToken)} />;
  }
}

AppRegistry.registerComponent('ContribuinteConectado', () => ContribuinteConectado);
