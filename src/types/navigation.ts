import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootNavigatorParams = {
  Home: undefined;
  Comments: {
    postId: string;
  };
  Auth: undefined;
};

export type BottomTabParamList = {
  HomeStack: undefined;
  Upload: undefined;
  MyProfile: undefined;
  Search: undefined;
};

export type MyUserProfileNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<BottomTabParamList, 'MyProfile'>;

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: {
    userId: string;
  };
};

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;

export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>;

export type SearchTabNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
};

// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
  'Sign in': undefined;
  'Sign up': undefined;
  'Confirm email': {email: string};
  'Forgot password': undefined;
  'New password': {
    email: string;
  };
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;

export type NewPasswordRouteProps = RouteProp<
  AuthStackNavigatorParamList,
  'New password'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;
