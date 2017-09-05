import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import Styles from '../common/Styles';

export default class SimuladorST extends Component {
  static navigationOptions = {
    title: 'Simulador ST',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      valorTotalProduto: 0,
      frete: 0,
      seguro: 0,
      outrasDespesas: 0,
      ipi: 0,
      desconto: 0,
      aliquota: 7,
      mva: 85,
      aliquotaIcmsSt: 17,
      aliquotaFecoep: 1
    };
  }

  subtotal() {
    return new Number(this.state.valorTotalProduto + this.state.frete + this.state.seguro + this.state.outrasDespesas + this.state.ipi - this.state.desconto).toFixed(2);
  }

  baseCalculoSt() {
    return new Number(this.subtotal() * this.state.mva / 100.0 + this.subtotal()).toFixed(2);
  }

  valorSt() {
    return new Number(this.baseCalculoSt() * this.state.aliquotaIcmsSt / 100.0 - this.subtotal() * this.state.aliquota / 100.0).toFixed(2);
  }

  valorFecoep() {
    return new Number(this.state.aliquotaFecoep * this.baseCalculoSt() / 100.0).toFixed(2);
  }

  valorTotalSt() {
    return new Number(this.valorFecoep() + this.valorSt()).toFixed(2);
  }

  totalOperacao() {
    return new Number(this.valorTotalSt() + this.subtotal()).toFixed(2);
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View>
          <Text>Valor total do produto (R$)</Text>
          <TextInput
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.frete.focus()}
            onChange={(e) => this.setState({valorTotalProduto: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Frete (R$)</Text>
          <TextInput
            ref="frete"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.seguro.focus()}
            onChange={(e) => this.setState({frete: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Seguro (R$)</Text>
          <TextInput
            ref="seguro"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.outrasDespesas.focus()}
            onChange={(e) => this.setState({seguro: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Outras despesas (R$)</Text>
          <TextInput
            ref="outrasDespesas"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.ipi.focus()}
            onChange={(e) => this.setState({outrasDespesas: Number(e.target.value)})} />
        </View>
        <View>
          <Text>IPI (R$)</Text>
          <TextInput
            ref="ipi"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.desconto.focus()}
            onChange={(e) => this.setState({ipi: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Desconto (R$)</Text>
          <TextInput
            ref="desconto"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.aliquota.focus()}
            onChange={(e) => this.setState({desconto: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Subtotal (R$)</Text>
          <Text>{this.subtotal()}</Text>
        </View>
        <View>
          <Text>Base de Cálc. ICMS (R$)</Text>
          <Text>{this.subtotal()}</Text>
        </View>
        <View>
          <Text>Alíquota (%)</Text>
          <TextInput
            ref="aliquota"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.mva.focus()}
            onChange={(e) => this.setState({aliquota: Number(e.target.value)})} />
        </View>
        <View>
          <Text>MVA (%)</Text>
          <TextInput
            ref="mva"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.aliquotaIcmsSt.focus()}
            onChange={(e) => this.setState({mva: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Base de cálculo ST (R$)</Text>
          <Text>{this.baseCalculoSt()}</Text>
        </View>
        <View>
          <Text>Alíquota ICMS ST (%)</Text>
          <TextInput
            ref="aliquotaIcmsSt"
            keyboardType="numeric"
            returnKeyType="next"
            style={[Styles.inputTextSm, Styles.textRight]}
            onSubmitEditing={(event) => this.refs.aliquotaFecoep.focus()}
            onChange={(e) => this.setState({aliquotaIcmsSt: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Valor da ST (R$)</Text>
          <Text>{this.valorSt()}</Text>
        </View>
        <View>
          <Text>Alíquota FECOEP (%)</Text>
          <TextInput
            ref="aliquotaFecoep"
            keyboardType="numeric"
            returnKeyType="done"
            style={[Styles.inputTextSm, Styles.textRight]}
            onChange={(e) => this.setState({aliquotaFecoep: Number(e.target.value)})} />
        </View>
        <View>
          <Text>Valor FECOEP (R$)</Text>
          <Text>{this.valorFecoep()}</Text>
        </View>
        <View>
          <Text>Valor Total ST (R$)</Text>
          <Text>{this.valorTotalSt()}</Text>
        </View>
        <View>
          <Text>Total da operação (R$)</Text>
          <Text>{this.totalOperacao()}</Text>
        </View>
      </View>
    );
  }
}