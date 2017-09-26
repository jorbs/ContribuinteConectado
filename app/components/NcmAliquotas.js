import {TabNavigator} from 'react-navigation';

import NCM from './NCM';
import Aliquotas from './Aliquotas';

const NcmAliquotas = TabNavigator(
  {
    NcmTab: {
      screen: NCM,
      path: 'ncm',
      navigationOptions: {
        tabBarLabel: 'NCM',
      }
    },
    AliquotasTab: {
      screen: Aliquotas,
      path: 'aliquotas',
      navigationOptions: {
        tabBarLabel: 'Aliquotas',
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

export default NcmAliquotas;