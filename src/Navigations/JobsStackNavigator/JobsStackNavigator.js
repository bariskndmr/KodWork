import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Jobs from 'screens/Jobs';
import JobDetail from 'screens/JobDetail';

const Stack = createNativeStackNavigator();

const JobsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JobDetailPage"
        component={JobDetail}
        options={{
          headerTintColor: '#ef534f',
        }}
      />
    </Stack.Navigator>
  );
};

export default JobsStackNavigator;
