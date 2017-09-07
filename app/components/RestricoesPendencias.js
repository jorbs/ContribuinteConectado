import {TabNavigator} from 'react-navigation';

import Restricoes from './Restricoes';
import Pendencias from './Pendencias';

const RestricoesPendencias = TabNavigator(
  {
    RestricoesTab: {
      screen: Restricoes,
      path: 'restricoes/:login/:requestToken',
      navigationOptions: {
        tabBarLabel: 'Restrições',
      }
    },
    PendenciasTab: {
      screen: Pendencias,
      path: 'pendencias/:login/:requestToken',
      navigationOptions: {
        tabBarLabel: 'Pendências',
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      tabStyle: {backgroundColor: '#113A7E'},
    }
  }
);

export default RestricoesPendencias;