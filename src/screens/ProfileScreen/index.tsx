import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import userData from '../../data/user.json';
import {ProfileHeader} from './ProfileHeader';
import {FeedGridView} from '../../components/FeedGridView';
import {
  MyProfileRouteProp,
  MyUserProfileNavigationProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from '../../types/navigation';

export const ProfileScreen = () => {
  const {params} = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyUserProfileNavigationProp
  >();

  const userId = params?.userId;

  return (
    <FeedGridView ListHeaderComponent={ProfileHeader} data={userData.posts} />
  );
};
