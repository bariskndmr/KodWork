import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Jobs from 'screens/Jobs';
import JobDetail from 'screens/JobDetail';
import FavJob from 'screens/FavJob';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTitleStyle: {
    color: '#FF5C58',
  },
  drawerActiveTintColor: '#FF5C58',
  headerTintColor: '#FF5C58',
};

const FavDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="JobsPage" component={Jobs} options={screenOptions} />
      <Drawer.Screen
        name="FavoritedJobsPage"
        component={FavJob}
        options={screenOptions}
      />
    </Drawer.Navigator>
  );
};

const JobsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={FavDrawerNavigator}
        options={{
          title: 'Jobs',
          headerTintColor: '#ef534f',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JobDetailPage"
        component={JobDetail}
        options={{
          headerTintColor: '#ef534f',
          title: 'Job Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default JobsStackNavigator;
