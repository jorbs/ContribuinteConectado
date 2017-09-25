import React, {Component} from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../common/Styles';
import AliquotasMap from '../common/AliquotasMap';

export default class Aliquotas extends Component {
  static navigationOptions = {
    title: 'Alíquotas',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {aliquots: []};
  }

  componentDidMount() {
    const aliquots = [];
    
    AliquotasMap.forEach(aliquot => {
      const mainBody = aliquot.descricao + (aliquot.ncm ? ` (${aliquot.ncm})` : '');
      aliquots.push({key: aliquots.length, title: 'Descrição', body: mainBody, icon: 'percent'});
      aliquots.push({key: aliquots.length, title: 'Alíquota', body: aliquot.aliquota});
      aliquots.push({key: aliquots.length, title: 'Alíquota Efetiva', body: aliquot.aliquota_efetiva});
      aliquots.push({key: aliquots.length, title: 'Fecoep', body: aliquot.fecoep});
    });

    this.setState({aliquots});
  }

  renderItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <MaterialCommunityIcons name="percent" style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.title}</Text>
            <Text style={Styles.itemSecondaryText}>{item.body}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={Styles.mainContainer}>
        <FlatList data={this.state.aliquots} renderItem={({item}) => this.renderItem(item)} style={Styles.listContainer} />
      </ScrollView>
    );
  }
}