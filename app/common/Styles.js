import { StyleSheet } from 'react-native';

export const colors = {
  white: '#fff',
  black: '#000',
  red: '#ad1125',
  darkBlue: '#0a235f',
  lightGray: '#efefef',
}

export const styles = StyleSheet.create({
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
  sectionHeaderImage: {
    height: 24,
    width: 20,
    marginRight: 6,
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
});

styles.headerTintColor = colors.white;
styles.headerPressColorAndroid = colors.lightGray;