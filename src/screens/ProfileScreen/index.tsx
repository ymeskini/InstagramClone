import React from 'react';

import userData from '../../data/user.json';
import {ProfileHeader} from './ProfileHeader';
import {FeedGridView} from '../../components/FeedGridView';

export const ProfileScreen = () => {
  return (
    <FeedGridView ListHeaderComponent={ProfileHeader} data={userData.posts} />
  );
};
