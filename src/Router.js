import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import JobsStackNavigator from 'navigations/JobsStackNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <JobsStackNavigator />
    </NavigationContainer>
  );
};

export default Router;
