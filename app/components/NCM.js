import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, TextInput, SectionList, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import dismissKeyboard from 'dismissKeyboard';
import Modal from 'react-native-modal';

import Styles from '../common/Styles';
import Constants from '../common/Constants';
import Aliquotas from '../common/Aliquotas';

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
    const items = term.length > 2 ? (
      Aliquotas.filter((aliquota, i, array) => aliquota.description.toLowerCase().indexOf(term.toLowerCase()) != -1)
        .slice(0, Constants.NCM_LIMIT)
        .map(item => ({key: item.description, ...item}))
    ) : [];
    this.setState({items});
  }

  onUseSimulator(mva) {
    this.setState({mva: null});
    this.props.navigation.navigate('SimuladorST', {mva});
  }

  renderSectionHeader(section) {
    return (
      <View style={Styles.sectionHeaderContainer}>
        <MaterialCommunityIcons name={section.icon} size={24} style={Styles.sectionHeaderIcon} />
        <Text style={Styles.sectionHeader}>{section.title}</Text>
      </View>
    );
  }

  renderSectionItem(item) {
    return (
      <View key={item.key} style={Styles.row}>
        <View style={Styles.itemContainer}>
          <Text style={Styles.itemHeader}>{item.key}</Text>
          <Text style={Styles.itemBody}>{item.data}</Text>
        </View>
      </View>
    );
  }
  
  renderSectionFooter(section) {
    return (
      <View style={Styles.action}>
        <TouchableOpacity style={Styles.actionButton} onPress={() => this.setState({mva: section.mva})}>
          <FontAwesome name="calculator" style={Styles.actionIcon}/>
          <Text style={Styles.actionLabel}>Usar no Simulador</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderMvaModal() {
    return (
      <Modal isVisible={this.state.mva != null} onBackdropPress={() => this.setState({mva: null})}>
        <View style={Styles.modal}>
          <Text style={Styles.modalHeader}>Selecione o MVA a ser usado no Simulador ST</Text>
          {this.state.mva.map(mva => {
            const mvaPercentage = (mva * 100).toFixed(2).replace(/\./g, ',');

            return (
              <TouchableOpacity key={mva} onPress={() => this.onUseSimulator(mvaPercentage)}>
                <Text style={Styles.modalParagraph}>{mvaPercentage}%</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  }

  renderSelectedItem() {
    if (this.state.selectedItem) {
      const {selectedItem} = this.state;
      const sections = [{
        title: 'Detalhes do produto',
        mva: selectedItem.mva,
        icon: 'numeric',
        data: [
          {key: 'Descrição', data: selectedItem.description},
          {key: `NCM${selectedItem.ncm.length > 1 ? 's' : ''}`, data: selectedItem.ncm.join(', ')},
          {key: 'MVA Original', data: (selectedItem.mva[0] * 100).toFixed(2) + '%'},
          {key: 'MVA - Operação Interestadual a 12%', data: (selectedItem.mva[1] * 100).toFixed(2) + '%'},
          {key: 'MVA - Operação Interestadual a 7%', data: (selectedItem.mva[2] * 100).toFixed(2) + '%'},
          {key: 'MVA - Operação Interestadual a 4%', data: (selectedItem.mva[3] * 100).toFixed(2) + '%'},
        ]
      }];

      return (
        <View>
          <SectionList
            sections={sections}
            renderSectionHeader={({section}) => this.renderSectionHeader(section)}
            renderSectionFooter={({section}) => this.renderSectionFooter(section)}
            renderItem={({item}) => this.renderSectionItem(item)} />
        </View>
      );
    }
  }

  renderItem(item) {
    return (
      <TouchableOpacity key={item.description} onPress={() => this.setState({selectedItem: item, items: []})}>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  }

  renderItems() {
    return <FlatList data={this.state.items} renderItem={({item}) => this.renderItem(item)} />;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView style={Styles.mainContainer}>
          <View style={Styles.searchContainer}>
            <Text style={Styles.h2}>Entre com a descrição do produto</Text>
            <View style={Styles.centerContainer}>
              <TextInput
                blurOnSubmit={true}
                returnKeyType="done"
                style={[Styles.inputTextLg, Styles.searchInputText]}
                onSubmitEditing={event => this.onSearch(event)}
                onChangeText={ncm => this.onSearch(ncm)} />
            </View>
          </View>
          {this.renderItems()}
          {this.renderSelectedItem()}
          {this.state.mva && this.renderMvaModal()}
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}