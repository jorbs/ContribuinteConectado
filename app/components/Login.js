import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, TextInput, View, Alert, Switch, TouchableOpacity, AsyncStorage, Modal, WebView, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Constants from '../common/Constants';
import Styles from '../common/Styles';
import * as SefazAPI from '../api/SefazAPI';
import MyActivityIndicator from './MyActivityIndicator';

export default class Login extends Component {
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
    } catch (e) {
      console.warn('Unable to retrieve login and requestToken from AsyncStorage: ', e);
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
      this.props.navigation.navigate('TermoApreensao', {login: this.state.login, requestToken: this.state.requestToken})
      return;
    }

    const deviceId = DeviceInfo.getDeviceId();

    this.setState({pendingRequest: true});

    try {
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
    } catch(e) {
      const {goBack} = this.props.navigation;
      Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]);
    } finally {
      this.setState({pendingRequest: false});
    }
  }

  async authenticate() {
    try {
      const response = await SefazAPI.autenticar(this.state.login, this.state.authorizationId);
        
      if (response.id_token != null) {
        try {
          await AsyncStorage.setItem(Constants.REQUEST_TOKEN_KEY, response.id_token);
        } catch (error) {
          console.error('Unable to persist requestToken on AsyncStorage: ', error);
        }

        this.setState({requestToken: response.id_token});

        this.props.navigation.navigate('TermoApreensao', {login: this.state.login, requestToken: this.state.requestToken});
      } else if (response.mensagem != null) {
        Alert.alert(response.mensagem);
      } else {
        Alert.alert('Não foi possível autenticar-se.');
      }
    } catch(e) {
      const {goBack} = this.props.navigation;
      Alert.alert('Erro na solicitação', e.message, [{text: 'OK', onPress: () => goBack()}]);
    } finally {
      this.setState({pendingRequest: false});
    }
  }

  async onAuthorizationModalClosed() {
    this.setState({authorizationModalVisible: false});
    await this.authenticate();
  }

  navigate(path) {
    this.props.navigation.navigate(path, {login: 24006664, requestToken: 'requestToken'});
    // this.props.navigation.navigate(path, {login: this.state.login, requestToken: this.state.requestToken});
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
          <Text style={{fontSize: 32, width: 200, textAlign: 'center', marginBottom: 20, color: 'white'}}>Contribuinte Conectado</Text>
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
          <TouchableOpacity style={styles.loginButton} accessibilityLabel="Acesse o Portal do Contribuinte" onPress={() => this.login()}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Switch value={this.state.rememberMe} onValueChange={rememberMe => this.setState({rememberMe})}/>
          <Text style={{lineHeight: 23, marginLeft: 4, color: 'white'}}>Lembrar acesso</Text>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('SituacaoCadastral')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="vcard-o" color="white" size={48} />
            <Text style={Styles.menuItemLabel}>Situação{"\n"}Cadastral</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('Certidao')} style={Styles.menuCol}>
            <Entypo name="price-ribbon" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Certidões</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('TermoApreensao')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="truck" color="white" size={48} />
            <Text style={Styles.menuItemLabel}>Termos de{"\n"}Apreensão</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('RestricoesPendencias')} style={Styles.menuCol}>
            <FontAwesome name="list-alt" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Restrições e{"\n"}Pendências</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('Antecipado')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="money" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Antecipados</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('Processos')} style={Styles.menuCol}>
            <Entypo name="archive" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Processos</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.menuRow}>
          <TouchableOpacity onPress={() => this.navigate('SimuladorST')} style={[Styles.menuCol, Styles.menuColFirst]}>
            <FontAwesome name="calculator" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Simulador ST</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigate('CallCenter')} style={Styles.menuCol}>
            <FontAwesome name="phone" color="#fff" size={48}/>
            <Text style={Styles.menuItemLabel}>Call Center</Text>
          </TouchableOpacity>
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