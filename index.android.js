import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './app/components/Home';
import SituacaoCadastral from './app/components/SituacaoCadastral';

const ContribuinteConectado = StackNavigator({
  Home: {
    screen: Home
  },
  SituacaoCadastral: {
    path: 'situacaoCadastral/:login/:requestToken',
    screen: SituacaoCadastral
  },
})

AppRegistry.registerComponent('ContribuinteConectado', () => ContribuinteConectado);
