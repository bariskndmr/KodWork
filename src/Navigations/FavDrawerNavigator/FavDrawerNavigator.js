import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import JobsStackNavigator from '../JobsStackNavigator';
import FavJob from 'screens/FavJob';

const Drawer = createDrawerNavigator();

const FavDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Jobs"
        component={JobsStackNavigator}
        options={{
          headerTitleStyle: {
            color: '#FF5C58',
          },
        }}
      />
      <Drawer.Screen
        name="Favorited Jobs"
        component={FavJob}
        options={{
          headerTitleStyle: {
            color: '#FF5C58',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default FavDrawerNavigator;
