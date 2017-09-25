import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';

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
      valorProduto: '0,00',
      frete: '0,00',
      seguro: '0,00',
      outrasDespesas: '0,00',
      ipi: '0,00',
      desconto: '0,00',
      aliquota: '12',
      mva: '50',
      aliquotaIcmsSt: '17',
      aliquotaFecoep: '1'
    };
  }
  
  componentDidMount() {
    const {params} = this.props.navigation.state;
    params.mva && this.setState({mva: params.mva});
  }

  toF(number) {
    if (number == null) {
      number = '0';
    }

    return parseFloat(number.replace(/,/g, '.'));
  }

  subtotal() {
    return this.toF(this.state.valorProduto) + this.toF(this.state.frete) + this.toF(this.state.seguro) + this.toF(this.state.outrasDespesas) + this.toF(this.state.ipi) - this.toF(this.state.desconto);
  }

  baseCalculoSt() {
    return this.subtotal() * this.toF(this.state.mva) / 100.0 + this.subtotal();
  }

  valorSt() {
    return this.baseCalculoSt() * this.toF(this.state.aliquotaIcmsSt) / 100.0 - this.subtotal() * this.toF(this.state.aliquota) / 100.0;
  }

  valorFecoep() {
    return this.toF(this.state.aliquotaFecoep) * this.baseCalculoSt() / 100.0;
  }

  valorTotalSt() {
    return this.valorFecoep() + this.valorSt();
  }

  totalOperacao() {
    return this.valorTotalSt() + this.subtotal();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <View style={Styles.stContainer}>
            <View style={Styles.row}>
              <View>
                <Text style={Styles.formFieldLabel}>Valor do produto (R$)</Text>
                <TextInput
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  selectTextOnFocus
                  onSubmitEditing={event => this.refs.frete.focus()}
                  onChangeText={(number) => this.setState({valorProduto: number})}
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]} />
              </View>
              <View style={Styles.stRightCol}>
                <Text style={Styles.formFieldLabel}>Frete (R$)</Text>
                <TextInput
                  ref="frete"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.frete}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.seguro.focus()}
                  onChangeText={(number) => this.setState({frete: number})} />
              </View>
            </View>
            <View style={Styles.row}>
              <View>
                <Text style={Styles.formFieldLabel}>Seguro (R$)</Text>
                <TextInput
                  ref="seguro"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.seguro}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.outrasDespesas.focus()}
                  onChangeText={(number) => this.setState({seguro: number})} />
              </View>
              <View style={Styles.stRightCol}>
                <Text style={Styles.formFieldLabel}>Outras despesas (R$)</Text>
                <TextInput
                  ref="outrasDespesas"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.outrasDespesas}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.ipi.focus()}
                  onChangeText={(number) => this.setState({outrasDespesas: number})} />
              </View>
            </View>
            <View style={Styles.row}>
              <View>
                <Text style={Styles.formFieldLabel}>IPI (R$)</Text>
                <TextInput
                  ref="ipi"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.ipi}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.desconto.focus()}
                  onChangeText={(number) => this.setState({ipi: number})} />
              </View>
              <View style={Styles.stRightCol}>
                <Text style={Styles.formFieldLabel}>Desconto (- R$)</Text>
                <TextInput
                  ref="desconto"
                  keyboardType="numeric"
                  defaultValue={this.state.desconto}
                  returnKeyType="next"
                  blurOnSubmit={true}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.aliquota.focus()}
                  onChangeText={(number) => this.setState({desconto: number})} />
              </View>
            </View>
            <View style={Styles.row}>
              <View>
                <Text style={Styles.formFieldLabel}>Alíquota (%)</Text>
                <TextInput
                  ref="aliquota"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.aliquota}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.mva.focus()}
                  onChangeText={(number) => this.setState({aliquota: number})} />
              </View>
              <View style={Styles.stRightCol}>
                <Text style={Styles.formFieldLabel}>MVA (%)</Text>
                <TextInput
                  ref="mva"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.mva}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.aliquotaIcmsSt.focus()}
                  onChangeText={(number) => this.setState({mva: number})} />
              </View>
            </View>
            <View style={Styles.row}>
              <View>
                <Text style={Styles.formFieldLabel}>Alíquota ICMS ST (%)</Text>
                <TextInput
                  ref="aliquotaIcmsSt"
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={true}
                  defaultValue={this.state.aliquotaIcmsSt}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onSubmitEditing={(event) => this.refs.aliquotaFecoep.focus()}
                  onChangeText={(number) => this.setState({aliquotaIcmsSt: number})} />
              </View>
              <View style={Styles.stRightCol}>
                <Text style={Styles.formFieldLabel}>Alíquota FECOEP (%)</Text>
                <TextInput
                  ref="aliquotaFecoep"
                  keyboardType="numeric"
                  returnKeyType="done"
                  blurOnSubmit={true}
                  defaultValue={this.state.aliquotaFecoep}
                  selectTextOnFocus
                  style={[Styles.inputTextMd, Styles.textRight, Styles.formInputText]}
                  onChangeText={(number) => this.setState({aliquotaFecoep: number})} />
              </View>
            </View>
          </View>
          <View style={Styles.stResultContainer}>
            <View style={Styles.row}>
              <Text style={Styles.st50}>Subtotal</Text>
              <Text style={[Styles.st50, Styles.stResult]}>R$ {this.subtotal().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.st50}>Base de Cálc. ICMS</Text>
              <Text style={[Styles.st50, Styles.stResult]}>R$ {this.subtotal().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.st50}>Base de cálculo ST</Text>
              <Text style={[Styles.st50, Styles.stResult]}>R$ {this.baseCalculoSt().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.st50}>Valor da ST</Text>
              <Text style={[Styles.st50, Styles.stResult]}>R$ {this.valorSt().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.st50}>Valor FECOEP</Text>
              <Text style={[Styles.st50, Styles.stResult]}>R$ {this.valorFecoep().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
            <View style={Styles.row}>
              <Text style={Styles.st50}>Valor Total ST</Text>
              <Text style={[Styles.st50, Styles.stResult]}>R$ {this.valorTotalSt().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
            <View style={[Styles.row, Styles.stTotal]}>
              <Text style={[Styles.textBold, Styles.st50]}>Total da operação</Text>
              <Text style={[Styles.textBold, Styles.st50, Styles.stResult]}>R$ {this.totalOperacao().toFixed(2).replace(/\./g, ',')}</Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}