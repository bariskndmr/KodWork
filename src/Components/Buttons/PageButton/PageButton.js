import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import Styles from './PageButton.style';

const PageButton = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <Text style={Styles.text}>
        {loading ? <ActivityIndicator size={20} /> : text}
      </Text>
    </TouchableOpacity>
  );
};

export default PageButton;
