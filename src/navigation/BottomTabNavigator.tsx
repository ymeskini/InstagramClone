/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ProfileScreen} from '../screens/ProfileScreen';
import {PostUploadScreen} from '../screens/PostUploadScreen';
import colors from '../theme/colors';
import {HomeStackNavigator} from './HomeStackNavigator';

const Navigator = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Navigator.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
      }}>
      <Navigator.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
          headerShown: false,
        }}
        component={HomeStackNavigator}
        name="home"
      />
      <Navigator.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        component={PostUploadScreen}
        name="upload_screen"
      />
      <Navigator.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
        component={ProfileScreen}
        name="MyProfile"
      />
    </Navigator.Navigator>
  );
};
