import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, TextInput, View, Alert, Switch, TouchableOpacity, AsyncStorage, Modal, WebView, StyleSheet } from 'react-native';

import Constants from '../common/Constants';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Home extends Component {
  static navigationOptions = {
    header: null,    
  };

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

  async login() {
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
      this.props.navigation.navigate('RestricoesPendencias', { login: this.state.login, requestToken: this.state.requestToken })
      return;
    }

    const deviceId = DeviceInfo.getDeviceId();

    this.setState({ pendingRequest: true });

    const response = await SefazAPI.solicitarAutorizacao(this.state.login, deviceId);

    if (response.idAutorizacao != null) {
      this.setState({
        authorizationId: response.idAutorizacao,
        authorizationUrl: response.urlAutorizacao,
        authorizationModalVisible: true
      });
    } else if (response.mensagem != null) {
      Alert.alert(response.mensagem);
    } else {
      Alert.alert('Não foi possível autorizar a aplicação.');
    }

    this.setState({ pendingRequest: false });
  }

  async authenticate() {
    const response = await SefazAPI.autenticar(this.state.login, this.state.authorizationId);
    
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

      this.props.navigation.navigate('SituacaoCadastral', {login: this.state.login, requestToken: this.state.requestToken});
    } else if (response.mensagem != null) {
      Alert.alert(response.mensagem);
    } else {
      Alert.alert('Não foi possível autenticar-se.');
    }
  }

  async onAuthorizationModalClosed() {
    this.setState({authorizationModalVisible: false});
    await this.authenticate();
  }

  renderAuthorizationModal() {
    if (this.state.authorizationModalVisible) {
      return (
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.authorizationModalVisible}
          onRequestClose={() => this.onAuthorizationModalClosed()}
        >
          <TouchableOpacity
            onPress={() => this.onAuthorizationModalClosed()}
            style={{margin: 20}}
          >
            <Text>Retornar</Text>
          </TouchableOpacity>
          <WebView source={{uri: this.state.authorizationUrl}} />
        </Modal>
      );
    }
  }

  renderLoginForm() {
    if (this.state.pendingRequest) {
      return <MyActivityIndicator />;
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 32, width: 200, textAlign: 'center', marginBottom: 80, color: 'white'}}>Contribuinte Conectado</Text>
        </View>
        <View>
          <TextInput
              keyboardType='numeric'
              value={this.state.login}
              style={{height: 50, width: 200, textAlign: 'center', fontSize: 20, color: 'white'}}
              placeholder="Digite o seu Caceal"
              onChangeText={(value) => this.setState({login: value})}/>
        </View>
        <View>
          <TouchableOpacity
              style={styles.loginButton}
              accessibilityLabel="Acesse o Portal do Contribuinte"
              onPress={() => this.login()}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Switch
              value={this.state.rememberMe}
              onValueChange={(value) => this.setState({ rememberMe: value })}
          />
          <Text style={{lineHeight: 23, marginLeft: 4, color: 'white'}}>Lembrar acesso</Text>
        </View>
        {this.renderAuthorizationModal()}
      </View>
    );
  }

  render() {
    return this.renderLoginForm();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#113A7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#890f23',
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
  }
});