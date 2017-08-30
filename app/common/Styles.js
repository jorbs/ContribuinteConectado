import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  activityIndicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  requestingDataLabel: {
    marginLeft: 5,
    height: 18,
  },
  sectionList: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 20,
    color: '#992e40',
    marginTop: 10,
    marginBottom: 15,
    paddingBottom: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemContainer: {
    marginBottom: 5,
  },
  itemHeader: {
    color: 'black',
    marginBottom: 1,
  },
  itemBody: {
    color: '#fc254e',
    marginBottom: 3,
  },
});