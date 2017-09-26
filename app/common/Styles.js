import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  black: '#000',
  red: '#890f23',
  darkBlue: '#113A7E',
  lightGray: '#e1e2e1',
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
  loginContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center'
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
    backgroundColor: colors.lightGray,
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 46    
  },
  menuItemLabel: {
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
    backgroundColor: colors.lightGray,
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
    paddingRight: 8,
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
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 16,
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.darkBlue,
    borderRadius: 20
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
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
  },
  stResultContainer: {
    alignItems: 'center',
    marginTop: 16,    
  },
  stRightCol: {
    marginLeft: 24,
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
  itemRowAliquotas: {
    flexDirection: 'row',
    minHeight: 72
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
  appLogo: {
    height: 56,
    width: 56
  },
  loginLogo: {
    height: 160,
    width: 160,
    marginTop: 24,
    marginBottom: 8,
    alignSelf: 'center'
  },
  loginInput: {
    alignSelf: 'center',
    width: 180,
    textAlign: 'center',
    fontSize: 16,
    color: colors.white,
    marginTop: 32
  },
  loginButton: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
    paddingRight: 48,
    paddingLeft: 48,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: colors.red,
    borderRadius: 20
  },
  loginBody: {
    flex: 1
  },
  loginFooter: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16,
    maxHeight: 72
  },
  logoFooterContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logoSefaz: {
    alignSelf: 'flex-start',
    height: 24,
    width: 98
  },
  logoGoverno: {
    alignSelf: 'flex-end',
    height: 48,
    width: 120
  },
  appLabel: {
    color: colors.white,
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 8
  },
  homeLogo: {
    fontSize: 120,
    color: colors.white
  },
  activityIndicator: {
    marginRight: 5
  },
  ncmSearchContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  ncmSearchIcon: {
    fontSize: 18,
    color: colors.darkBlue,
    lineHeight: 20
  },
  ncmSearchItem: {
    marginBottom: 8,
    color: colors.black
  }
});

Styles.headerTintColor = colors.white;
Styles.headerPressColorAndroid = colors.lightGray;

export default Styles;