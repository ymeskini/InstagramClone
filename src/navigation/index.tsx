import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabNavigator} from './BottomTabNavigator';
import {CommentsScreen} from '../screens/CommentsScreen';
import {RootNavigatorParams} from '../types/navigation';

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const linking: LinkingOptions<RootNavigatorParams> = {
  prefixes: ['instagramclone://', 'https://instagramclone.com'],
  config: {
    screens: {
      Comments: 'comments', // instagramclone://comments
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId', // instagramclone://user/1
            },
          },
        },
      },
    },
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
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
