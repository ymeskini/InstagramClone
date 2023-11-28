import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileScreen} from '../screens/ProfileScreen';
import {BottomTabNavigator} from './BottomTabNavigator';
import {CommentsScreen} from '../screens/CommentsScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={BottomTabNavigator}
          name="Home"
        />
        <Stack.Screen
          component={ProfileScreen}
          name="UserProfile"
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
