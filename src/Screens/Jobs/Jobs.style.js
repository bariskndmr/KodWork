import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  pageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  counter: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 16,
  },
});
