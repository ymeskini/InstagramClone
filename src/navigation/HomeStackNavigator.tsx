import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import logo from '../assets/logo.png';

const Stack = createNativeStackNavigator();

const Header = () => {
  return (
    <View>
      <Image source={logo} resizeMode="contain" style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 45,
  },
});

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: Header,
          headerTitleAlign: 'center',
        }}
        name="Feed"
        component={HomeScreen}
      />
      <Stack.Screen
        name="UserProfile"
        options={{
          title: 'Profile',
        }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
