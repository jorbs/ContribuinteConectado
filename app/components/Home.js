import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, TextInput, View, Alert, Switch, TouchableOpacity, AsyncStorage } from 'react-native';

import * as Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pendingRequest: false,
      rememberMe: true
    };
  }

  async componentDidMount() {
    try {
      const login = await AsyncStorage.getItem(Constants.REMEMBER_ME_KEY);
      const requestToken = await AsyncStorage.getItem(Constants.REQUEST_TOKEN_KEY);
      const rememberMe = login != null;
      
      this.setState({
        login,
        requestToken,
        rememberMe
      });
    } catch (error) {
      console.error('Unable to retrieve login and requestToken from AsyncStorage: ', error);
    }
  }

  async submitCredentials() {
    if (this.state.rememberMe) {
      await AsyncStorage.setItem(Constants.REMEMBER_ME_KEY, this.state.login);
    } else {
      await AsyncStorage.removeItem(this.state.login);
      await AsyncStorage.removeItem(Constants.REQUEST_TOKEN_KEY);
      await AsyncStorage.removeItem(Constants.REMEMBER_ME_KEY);
    }

    if (this.state.login == null || this.state.login.length === 0) {
      Alert.alert('Login inválido.');
      return;
    }

    if (this.state.requestToken != null) {
      console.log('Using requestToken: ', this.state.requestToken);
      return;
    }

    const deviceId = DeviceInfo.getDeviceId();

    this.setState({ pendingRequest: true });

    // TODO: Visitar página de retorno e então obter o requestToken

    const response = await SefazAPI.solicitarAutorizacao(this.state.login, deviceId);

    if (response.idAutorizacao != null) {
      await this.authenticate(response.idAutorizacao);
    } else if (response.mensagem != null) {
      Alert.alert(response.mensagem);
    } else {
      Alert.alert('Não foi possível autorizar a aplicação.');
    }

    this.setState({ pendingRequest: false });
  }

  async authenticate(authorizationId) {
    const response = await SefazAPI.autenticar(this.state.login, authorizationId);
    
    if (response.id_token != null) {
      try {
        await AsyncStorage.setItem(Constants.REQUEST_TOKEN_KEY, response.id_token);
      } catch (error) {
        console.error('Unable to persist requestToken on AsyncStorage: ', error);
      }

      this.setState({
        requestToken: response.id_token,
        pendingRequest: false
      });
    
      this.props.setUserInfo(this.state.login, this.state.requestToken);
    } else if (response.mensagem != null) {
      Alert.alert(response.mensagem);
    } else {
      Alert.alert('Não foi possível autenticar-se.');
    }
  }

  renderLoginForm() {
    if (this.state.pendingRequest) {
      return <MyActivityIndicator />
    }

    return (
      <View style={{flex: 1, marginTop: 60, alignItems: 'center'}}>
        <View>
          <TextInput
              keyboardType='numeric'
              value={this.state.login}
              style={{height: 40, width: 200, textAlign: 'center'}}
              placeholder="Digite o seu usuário"
              onChangeText={(value) => this.setState({login: value})}/>
        </View>
        <View>
          <TouchableOpacity
              style={{backgroundColor: '#c4225f', paddingTop: 6, paddingBottom: 6, paddingLeft: 12, paddingRight: 12}}
              accessibilityLabel="Acesse o Portal do Contribuinte"
              onPress={() => this.submitCredentials()}>
            <Text style={{color: 'blue', textAlign: 'center', color: 'white', fontSize: 18}}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Switch
              value={this.state.rememberMe}
              onValueChange={(value) => this.setState({ rememberMe: value })}
          />
          <Text style={{lineHeight: 26, marginLeft: 4, backgroundColor: 'transparent'}}>Lembrar acesso</Text>
        </View>
      </View>
    );
  }

  render() {
    return this.renderLoginForm();
  }
}