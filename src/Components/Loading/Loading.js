import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Styles from './Loading.style';

const Loading = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color="#FF5C58" />
    </View>
  );
};
export default Loading;
