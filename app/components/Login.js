import React, {Component} from 'react';
import DeviceInfo from 'react-native-device-info';
import {Text, TextInput, Keyboard, Image, ActivityIndicator, View, Alert, Switch, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage, StyleSheet} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';

import Constants from '../common/Constants';
import Styles from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';

export default class Login extends Component {
  static navigationOptions = {
    header: null,    
  };

  constructor(props) {
    super(props);
    this.state = {
      pendingRequest: false,
      isLoadingScreen: true,
      rememberMe: true,
      showFooter: true
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this._keyboardDidShow());
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this._keyboardDidHide());
  }

  _keyboardDidShow () {
    this.setState({showFooter: false});
  }

  _keyboardDidHide () {
    this.setState({showFooter: true});
  }

  async componentDidMount() {
    try {
      const login = await AsyncStorage.getItem(Constants.REMEMBER_ME_KEY);
      const requestToken = await AsyncStorage.getItem(Constants.REQUEST_TOKEN_KEY);
      
      if (requestToken && login) {
        this.props.navigation.navigate('Home', {login, requestToken});
        return;
      }

      const rememberMe = login != null;
      
      this.setState({login, rememberMe, isLoadingScreen: false});
    } catch (e) {
      console.warn('Unable to retrieve login from AsyncStorage: ', e);
    }
  }

  async login() {
    dismissKeyboard();

    try {
      if (this.state.rememberMe) {
        await AsyncStorage.setItem(Constants.REMEMBER_ME_KEY, this.state.login);
      } else {
        await AsyncStorage.removeItem(Constants.REMEMBER_ME_KEY);
        await AsyncStorage.removeItem(Constants.REQUEST_TOKEN_KEY);
      }
    } catch (e) {
      console.warn('Unable to use AsyncStorage: ', e);
    }

    if (this.state.login == null || this.state.login.length === 0) {
      Alert.alert('Login inválido.');
      return;
    }

    if (this.state.authorizationId) {
      this.authenticate();
    } else {
      this.requestAuthorization();
    }
  }

  async requestAuthorization() {
    const deviceId = DeviceInfo.getDeviceId();
    
    this.setState({pendingRequest: true});

    try {
      const response = await SefazAPI.solicitarAutorizacao(this.state.login, deviceId);

      if (response.idAutorizacao) {
        this.setState({
          authorizationId: response.idAutorizacao,
          authorizationUrl: response.urlAutorizacao
        });
        this.props.navigation.navigate('Autorizacao', {authorizationUrl: response.urlAutorizacao});        
      } else if (response.mensagem != null) {
        Alert.alert(response.mensagem);
      } else {
        Alert.alert('Não foi possível autorizar a aplicação.');
      }
    } catch(e) {
      const {goBack} = this.props.navigation;
      Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]);
    } finally {
      this.setState({pendingRequest: false});
    }
  }

  async authenticate() {
    this.setState({pendingRequest: true});

    try {
      const response = await SefazAPI.autenticar(this.state.login, this.state.authorizationId);

      if (response.id_token != null) {
        await AsyncStorage.setItem(Constants.REQUEST_TOKEN_KEY, response.id_token);

        this.setState({requestToken: response.id_token});
        this.props.navigation.navigate('Home', {login: this.state.login, requestToken: this.state.requestToken});
      } else {
        Alert.alert('Não foi possível autenticar-se.');
      }
    } catch(e) {
      if (e.codigo === 1) {
        this.requestAuthorization();
      } else {
        const {goBack} = this.props.navigation;
        Alert.alert('Erro na solicitação', e.mensagem, [{text: 'OK', onPress: () => goBack()}]);
      }
    } finally {
      this.setState({pendingRequest: false});
    }
  }

  renderLoginForm() {
    return (
      <View>
        <TextInput
          keyboardType="numeric"
          returnKeyType="done"
          blurOnSubmit={true}
          value={this.state.login}
          style={Styles.loginInput}
          placeholder="Digite o seu Caceal"
          placeholderTextColor="#e1e2e1"
          underlineColorAndroid="white"
          onSubmitEditing={event => this.login()}
          onChangeText={value => this.setState({login: value})}/>
        <TouchableOpacity style={[Styles.loginButton, Styles.row]} accessibilityLabel="Acesse o Portal do Contribuinte" disabled={this.state.pendingRequest} onPress={() => this.login()}>
          {this.state.pendingRequest && <ActivityIndicator style={Styles.activityIndicator} />}
          <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>{this.state.pendingRequest ? 'Entrando...' : 'Entrar'}</Text>
        </TouchableOpacity>
        <View style={[Styles.row, {alignSelf: 'center'}]}>
          <Switch value={this.state.rememberMe} onValueChange={rememberMe => this.setState({rememberMe})}/>
          <Text style={{lineHeight: 23, marginLeft: 4, color: 'white'}} onPress={() => this.setState({rememberMe: !this.state.rememberMe})}>Lembrar acesso</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={Styles.loginContainer}>
          <View style={Styles.loginBody}>
            <Image source={require('./../assets/images/home-logo.png')} style={Styles.loginLogo} />
            <Text style={Styles.appLabel}>Contribuinte</Text>
            <Text style={Styles.appLabel}>Conectado</Text>
            {this.state.isLoadingScreen && <ActivityIndicator style={{marginTop: 16}}/>}
            {!this.state.isLoadingScreen && this.renderLoginForm()}
          </View>
          {this.state.showFooter && <View style={Styles.loginFooter}>
            <View style={Styles.logoFooterContainer}>
              <Image source={require('./../assets/images/logo-sefaz.png')} style={Styles.logoSefaz} />
            </View>
            <View style={Styles.logoFooterContainer}>
              <Image source={require('./../assets/images/logo-governo.png')} style={Styles.logoGoverno} />
            </View>
          </View>}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}