import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  black: '#000',
  red: '#ad1125',
  darkBlue: '#113A7E',
  lightGray: '#efefef',
};

const Styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.darkBlue,
  },
  headerTitleStyle: {
    color: colors.white,
    fontSize: 24
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuRow: {
    flexDirection: 'row',
    padding: 5
  },
  menuCol: {
    alignItems: 'center',
    padding: 3,
    marginLeft: 30,    
  },
  menuColFirst: {
    marginLeft: 0,
  },
  menuItemLabel: {
    marginTop: 10,
    color: colors.white,
    fontSize: 18,    
  },
  activityIndicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  requestingDataLabel: {
    marginLeft: 5,
    height: 18,
  },
  h1: {
    fontSize: 22,
    color: colors.red,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  h2: {
    fontSize: 18,
    color: colors.red,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5
  },
  sectionList: {
    padding: 20,
  },
  sectionHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    paddingBottom: 2,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 24,
    color: colors.red,
  },
  sectionHeaderIcon: {
    marginRight: 6,
    color: colors.red,
  },
  itemContainer: {
    marginBottom: 12,
  },
  itemHeader: {
    color: colors.darkBlue,
    fontSize: 16,
  },
  itemBody: {
    color: colors.black,
    fontSize: 18,
  },
  searchContainer: {
    padding: 10,
    marginBottom: 10,
  },
  searchRow: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 5,
  },
  searchLabel: {
    color: colors.black,
    fontSize: 20,
    textAlignVertical: 'center',
  },
  searchInputGroup: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10
  },
  searchInputText: {
    fontSize: 18,
    color: colors.black,
  },
  searchFieldIcon: {
    marginTop: 12,
    marginLeft: 8,
    fontSize: 26,
    color: colors.red,
  },
  searchButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  searchButtonCenter: {
    color: colors.white,
    backgroundColor: colors.darkBlue,
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 15,
  },
  searchResultLabel: {
    marginTop: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  inputTextLg: {
    width: 300,
  },
  inputTextMd: {
    width: 150,
    textAlign: 'center',
  },
  inputTextSm: {
    width: 100,
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textBold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.darkBlue,
    color: colors.white,
    padding: 5,
  },
  buttonLast: {
    marginLeft: 10,
  },
  modal: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 5,
  },
  modalHeader: {
    color: colors.red,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.red,
    marginBottom: 12,
  },
  modalParagraph: {
    color: colors.black,
    marginBottom: 10,
  },
  modalPhone: {
    marginLeft: 20,
    color: colors.darkBlue,
  },
  stContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  stRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  stColFirst: {
    marginLeft: 0,
  },
  stCol: {
    marginLeft: 40,
  },
  stLabel: {
    color: colors.darkBlue,
    padding: 0,
    margin: 0
  },
  stInput: {
    paddingTop: 0,
  },
  st50: {
    flex: 0.4,
    color: colors.black,
  },
  stResult: {
    flex: 0.3,
    color: colors.red,
    marginLeft: 30,
    textAlign: 'right'
  },
  stTotal: {
    marginTop: 10,
  }
});

Styles.headerTintColor = colors.white;
Styles.headerPressColorAndroid = colors.lightGray;

export default Styles;