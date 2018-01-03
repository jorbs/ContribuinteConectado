import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './app/components/Login';
import Autorizacao from './app/components/Autorizacao';
import Home from './app/components/Home';
import SituacaoCadastral from './app/components/SituacaoCadastral';
import Certidao from './app/components/Certidao';
import PendenciasCertidao from './app/components/PendenciasCertidao';
import TermoApreensao from './app/components/TermoApreensao';
import RestricoesPendencias from './app/components/RestricoesPendencias';
import Restricoes from './app/components/Restricoes';
import Antecipado from './app/components/Antecipado';
import Processos from './app/components/Processos';
import CallCenter from './app/components/CallCenter';
import AcaoFiscal from './app/components/AcaoFiscal';
import SimuladorST from './app/components/SimuladorST';
import NcmAliquotas from './app/components/NcmAliquotas';

const ContribuinteConectado = StackNavigator({
  Login: {
    screen: Login
  },
  Autorizacao: {
    path: 'autorizacao/:authorizationUrl',
    screen: Autorizacao
  },
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
  },
  PendenciasCertidao: {
    path: 'pendenciasCertidao/:login/:requestToken',
    screen: PendenciasCertidao
  },
  TermoApreensao: {
    path: 'termoApreensao/:login/:requestToken',
    screen: TermoApreensao
  },
  Restricoes: {
    path: 'restricoes/:login/:requestToken',
    screen: Restricoes
  },
  Antecipado: {
    path: 'antecipado/:login/:requestToken',
    screen: Antecipado
  },
  Processos: {
    path: 'processos/:login/:requestToken',
    screen: Processos
  },
  CallCenter: {
    path: 'callCenter/:requestToken',
    screen: CallCenter
  },
  SimuladorST: {
    path: 'simulador',
    screen: SimuladorST
  },
  NcmAliquotas: {
    path: 'ncmAliquotas',
    screen: NcmAliquotas
  },
  AcaoFiscal: {
    path: 'acaoFiscal',
    screen: AcaoFiscal
  }
})

AppRegistry.registerComponent('ContribuinteConectado', () => ContribuinteConectado);
