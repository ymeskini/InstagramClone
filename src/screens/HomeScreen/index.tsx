import React from 'react';
import {FlatList} from 'react-native';

import posts from '../../data/posts.json';
import {FeedPost} from '../../components/FeedPost';

const HomeScreen = () => (
  <FlatList
    showsVerticalScrollIndicator={false}
    data={posts}
    keyExtractor={({id}) => id}
    renderItem={({item}) => <FeedPost post={item} />}
  />
);

export default HomeScreen;
