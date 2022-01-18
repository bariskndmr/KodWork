import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import JobsStackNavigator from 'navigations/JobsStackNavigator';
import FavProvider from './Context/FavProvider/FavProvider';

const Router = () => {
  return (
    <FavProvider>
      <NavigationContainer>
        <JobsStackNavigator />
      </NavigationContainer>
    </FavProvider>
  );
};

export default Router;
