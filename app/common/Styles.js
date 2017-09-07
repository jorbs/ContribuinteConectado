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
    backgroundColor: '#113A7E',
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
  sectionList: {
    padding: 20,
  },
  sectionHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
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
});

Styles.headerTintColor = colors.white;
Styles.headerPressColorAndroid = colors.lightGray;

export default Styles;