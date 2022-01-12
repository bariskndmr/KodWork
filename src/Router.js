import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FavDrawerNavigator from './Navigations/FavDrawerNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <FavDrawerNavigator />
    </NavigationContainer>
  );
};

export default Router;
