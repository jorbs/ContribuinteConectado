import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, TextInput, SectionList, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import dismissKeyboard from 'dismissKeyboard';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import NcmMap from '../common/NcmMap';

export default class NCM extends Component {
  static navigationOptions = {
    title: 'NCM',
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTintColor: Styles.headerTintColor,
    headerPressColorAndroid: Styles.headerPressColorAndroid,
    gesturesEnabled: true,
  };

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  onSearch(term) {
    let items = [];

    if (isNaN(term[0])) {
      items = NcmMap.filter((aliquota, i, array) => aliquota.description.toLowerCase().indexOf(term.toLowerCase()) != -1)
        .slice(0, Constants.NCM_LIMIT)
        .map(item => ({key: item.description, ...item}))
    } else {
      items = NcmMap.filter(aliquota => aliquota.ncm.filter(n => n.indexOf(term) != -1).length > 0)
        .slice(0, Constants.NCM_LIMIT)
        .map(item => ({key: item.description, ...item}))
    }
    
    this.setState({items});
  }

  onUseSimulator(mva) {
    const mvaPercentage = (mva * 100).toFixed(2).replace(/\./g, ',');
    this.props.navigation.navigate('SimuladorST', {mva: mvaPercentage});
  }
  
  renderSelectedItem(item) {
    return (
      <View style={Styles.itemRow}>
        {item.icon != null ? <MaterialCommunityIcons name={item.icon} style={Styles.itemLeftIcon} /> : <Text style={Styles.itemLeftIcon} />}
        <View style={Styles.itemContainer}>
          <View style={Styles.itemTextContainer}>
            <Text style={[Styles.itemPrimaryText, item.icon && {fontWeight: 'bold'}]}>{item.key}</Text>
            <Text style={Styles.itemSecondaryText}>{item.data}</Text>
          </View>
          {item.mva && <TouchableOpacity onPress={() => this.onUseSimulator(item.mva)}>
            <MaterialCommunityIcons name="calculator" style={Styles.itemRightIcon} />
          </TouchableOpacity>}
        </View>
      </View>
    );
  }

  renderSelectedItemList() {
    const {selectedItem} = this.state;
    const selectedItemDetails = [
      {key: 'Descrição', data: selectedItem.description, icon: 'numeric'},
      {key: `NCM${selectedItem.ncm.length > 1 ? 's' : ''}`, data: selectedItem.ncm.join(', ')},
      {key: 'Acordo Interestadual', data: selectedItem.legal || 'Não existe'},
      {key: 'MVA Original', data: (selectedItem.mva[0] * 100).toFixed(2) + '%'},
      {key: 'MVA  12%', data: (selectedItem.mva[1] * 100).toFixed(2) + '%', mva: selectedItem.mva[1]},
      {key: 'MVA  7%', data: (selectedItem.mva[2] * 100).toFixed(2) + '%', mva: selectedItem.mva[2]},
      {key: 'MVA  4%', data: (selectedItem.mva[3] * 100).toFixed(2) + '%', mva: selectedItem.mva[3]},
    ];

    return <FlatList data={selectedItemDetails} renderItem={({item}) => this.renderSelectedItem(item)} style={Styles.listContainer} />;
  }

  renderItem(item) {
    return (
      <View>
      <TouchableOpacity key={item.description} onPress={() => this.setState({selectedItem: item, items: []})}>
        <View style={Styles.row}>
          <MaterialCommunityIcons name="menu-right" style={Styles.ncmSearchIcon} />
          <Text style={Styles.ncmSearchItem}>{item.ncm.join(', ')} - {item.description}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <Grid>
            <Row size={25}>
              <Col style={[Styles.searchContainer, {paddingBottom: 16}]}>
                <View>
                  <Text style={Styles.formFieldLabel}>Descrição ou NCM do produto</Text>
                  <TextInput
                    returnKeyType="done"
                    onChangeText={term => this.onSearch(term)}
                    style={[Styles.inputTextLg, Styles.formInputText]} />
                </View>
              </Col>
            </Row>
            <Row size={75}>
              <Col>
                <FlatList data={this.state.items} renderItem={({item}) => this.renderItem(item)} style={Styles.ncmSearchContainer} />
                {this.state.items.length === 0 && this.state.selectedItem && this.renderSelectedItemList()}
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}