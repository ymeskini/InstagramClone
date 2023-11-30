import React, {useEffect, useState} from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {fetchAuthSession} from 'aws-amplify/auth';
import {AuthSession} from '@aws-amplify/core/dist/esm/singleton/Auth/types';
import {Hub} from 'aws-amplify/utils';

import {BottomTabNavigator} from './BottomTabNavigator';
import {CommentsScreen} from '../screens/CommentsScreen';
import {RootNavigatorParams} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';

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
  const [userSession, setUserSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserSession = async () => {
    try {
      const session = await fetchAuthSession({forceRefresh: true});
      setUserSession(session);
    } catch (error) {
      // no session?
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserSession();
  }, []);

  useEffect(() => {
    const listener = Hub.listen('auth', data => {
      if (data.payload.event === 'signedOut') {
        setUserSession(null);
      }

      if (data.payload.event === 'signedIn') {
        fetchUserSession();
      }
    });

    return () => {
      listener();
    };
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: true,
        }}>
        {!userSession?.identityId ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Auth"
            component={AuthStackNavigator}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            component={BottomTabNavigator}
            name="Home"
          />
        )}
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
