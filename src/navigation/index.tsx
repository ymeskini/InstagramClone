import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
// @ts-ignore
import logo from '../assets/logo.png';

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
            headerTitle: Header,
            headerTitleAlign: 'center',
          }}
          component={HomeScreen}
          name="home"
        />
        <Stack.Screen
          component={ProfileScreen}
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return (
    <View>
      <Image
        source={logo}
        resizeMode="contain"
        style={{
          width: 150,
          height: 45,
        }}
      />
    </View>
  );
};
