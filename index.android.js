import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './app/components/Home';
import SituacaoCadastral from './app/components/SituacaoCadastral';
import Certidao from './app/components/Certidao';

const ContribuinteConectado = StackNavigator({
  Home: {
    screen: Home
  },
  SituacaoCadastral: {
    path: 'situacaoCadastral/:login/:requestToken',
    screen: SituacaoCadastral
  },
  Certidao: {
    path: 'certidao/:login/:requestToken',
    screen: Certidao
  }
})

AppRegistry.registerComponent('ContribuinteConectado', () => ContribuinteConectado);
