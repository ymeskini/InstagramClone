import React from 'react';
import {useRoute} from '@react-navigation/native';

import userData from '../../data/user.json';
import {ProfileHeader} from './ProfileHeader';
import {FeedGridView} from '../../components/FeedGridView';

export const ProfileScreen = () => {
  const {
    params: {userId},
  } = useRoute();

  // get user by id
  return (
    <FeedGridView ListHeaderComponent={ProfileHeader} data={userData.posts} />
  );
};
