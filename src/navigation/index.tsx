import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabNavigator} from './BottomTabNavigator';
import {CommentsScreen} from '../screens/CommentsScreen';
import {RootNavigatorParams} from '../types/navigation';

const Stack = createNativeStackNavigator<RootNavigatorParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
