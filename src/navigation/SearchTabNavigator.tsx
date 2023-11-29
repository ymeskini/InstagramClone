import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import {SearchTabNavigatorParamList} from '../types/navigation';
import {UserSearchScreen} from '../screens/UserSearchScreen';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const Search = () => {
  return <Text>This is search</Text>;
};

export const SearchTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Search} />
      <Tab.Screen name="Users" component={UserSearchScreen} />
    </Tab.Navigator>
  );
};
