import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './PageButton.style';

const PageButton = ({text, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <MaterialCommunityIcons
        style={Styles.icon}
        name={icon}
        size={24}
        color="#fff"
      />
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PageButton;
