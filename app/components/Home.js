import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Constants from '../common/Constants';
import Styles from '../common/Styles';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  navigate(path) {
    const {params} = this.props.navigation.state;
    this.props.navigation.navigate(path, params);
  }

  render() {
    return (
      <View style={Styles.menu}>
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
      </View>
    );
  }
}