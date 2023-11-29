import React from 'react';
import {FlatList} from 'react-native';

import users from '../../data/users.json';
import {UserListItem} from '../../components/UserListItem';

export const UserSearchScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};
