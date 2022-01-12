import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#fff',
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationContainer: {
    alignSelf: 'baseline',
    backgroundColor: '#ef534f',
    padding: 2,
    borderRadius: 5,
  },
  location: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sprinklr: {
    paddingVertical: 3,
  },
  level: {
    alignSelf: 'flex-end',
    color: '#ef534f',
    fontWeight: 'bold',
  },
});
