import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import About from '../pages/About';
import DashboardStack from './DashboardStack';
import { Button, IconButton } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            tabBarIcon: 'car-cruise-control',
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: 'information-outline',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
