import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  black: '#000',
  red: '#ad1125',
  darkBlue: '#113A7E',
  lightGray: '#ffe0e7',
};

const Styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.darkBlue,
  },
  headerTitleStyle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Medium'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  homeContainer: {
    backgroundColor: colors.darkBlue,
  },
  menu: {
    backgroundColor: colors.white,
    paddingTop: 16
  },
  menuRow: {
    marginLeft: 32,
    marginRight: 32
  },
  menuItem: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#ffe0e7',
    borderRadius: 4,
    width: 120
  },
  menuItemIcon: {
    color: colors.darkBlue,
    fontSize: 48,
    lineHeight: 48
  },
  menuItemNcm: {
    color: colors.darkBlue,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 46    
  },
  menuItemLabel: {
    marginTop: 3,
    color: colors.darkBlue,
    fontSize: 16,
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
  sectionHeaderIcon: {
    marginRight: 6,
    color: colors.red,
  },
  searchContainer: {
    backgroundColor: '#ffe0e7',
    alignItems: 'center',
    marginBottom: 16
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
  formFieldLabel: {
    color: colors.darkBlue,
    fontSize: 12,
    paddingTop: 16,
    paddingBottom: 8,
  },
  formInputText: {
    padding: 0,
    margin: 0,
    paddingBottom: 8,
    fontSize: 16,
    color: colors.black,
  },
  formInputIcon: {
    fontSize: 24,
    width: 24,
    marginRight: 4,
    marginBottom: 4,
    color: colors.red,
    alignSelf: 'flex-end',
  },
  searchButtonContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: colors.darkBlue,
  },
  searchButton: {
    color: colors.white,
  },
  searchButtonIcon: {
    color: colors.white,
    marginRight: 8,
    fontSize: 18    
  },
  emptySearchContainer: {
    alignItems: 'center',
    flex: 1
  },
  searchResultLabel: {
    textAlign: 'center',
    color: colors.red,
  },
  searchResultIcon: {
    fontSize: 16,
    color: colors.red,
    marginRight: 8,
    marginTop: 2
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
  },
  inputTextDate: {
    width: 120
  },
  inputTextSm: {
    width: 100,
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
  stResultContainer: {
    alignItems: 'center',
    marginTop: 20,    
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
  },
  recordDetails: {
    marginLeft: 15,
    color: colors.darkBlue,
    fontSize: 24,
  },
  action: {
    marginTop: 7,
    marginBottom: 20,
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
  },
  actionIcon: {
    marginRight: 12,
    fontSize: 24,
    color: colors.darkBlue
  },
  actionLabel: {
    color: colors.black,
    fontSize: 16
  },
  subheading: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: colors.black,
    opacity: 0.54,
    height: 48,
  },
  listContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
  },
  itemContainer: {
    flex: 1,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginBottom: 16,
    flexDirection: 'row',
  },
  itemTextContainer: {
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    height: 72,
    minHeight: 48
  },
  itemLeftIcon: {
    marginRight: 16,
    height: 40,
    width: 40,
    fontSize: 32,
    color: colors.darkBlue,
    alignSelf: 'flex-start',
  },
  itemRightIcon: {
    alignSelf: 'center',
    paddingTop: 8,
    paddingRight: 16,
    fontSize: 20,
    color: colors.darkBlue
  },
  itemPrimaryText: {
    lineHeight: 20,
    opacity: 0.87,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.black
  },
  itemSecondaryText: {
    lineHeight: 18,
    opacity: 0.54,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.black
  },
  activityIndicator: {
    marginRight: 5
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  logoutIcon: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 18
  },
  logoutButton: {
    flexDirection: 'row',
    position: 'absolute',
    right: 16,
    top: 16
  },
  logoutLabel: {
    marginLeft: 3,
    color: colors.white,
    fontWeight: 'bold'
  },
  appLabel: {
    color: colors.white,
    fontSize: 24,
    alignSelf: 'center',
    marginLeft: 8
  },
  homeLogo: {
    fontSize: 120,
    color: colors.white
  },
  activityIndicator: {
    marginRight: 5
  }
});

Styles.headerTintColor = colors.white;
Styles.headerPressColorAndroid = colors.lightGray;

export default Styles;