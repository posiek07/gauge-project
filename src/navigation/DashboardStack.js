import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import MyDriverScore from '../pages/MyDriverScore';
import MyTrips from '../pages/MyTrips';

export default () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerTitle: 'Dashboard' }}
      />
      <Stack.Screen
        name="MyDriverScore"
        component={MyDriverScore}
        options={{ headerTitle: 'My Driver Score' }}
      />
      <Stack.Screen
        name="MyTrips"
        component={MyTrips}
        options={{ headerTitle: 'My Trips' }}
      />
    </Stack.Navigator>
  );
};
