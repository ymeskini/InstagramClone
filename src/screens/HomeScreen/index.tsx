import React, {MutableRefObject, useRef, useState} from 'react';
import {FlatList, ViewToken} from 'react-native';

import posts from '../../data/posts.json';
import {FeedPost} from '../../components/FeedPost';
import {viewabilityConfig} from '../../constants/viewabilityConfig';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<null | string>(null);

  const onViewableItemsChanged: MutableRefObject<
    (info: {viewableItems: Array<ViewToken>; changed: Array<ViewToken>}) => void
  > = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActivePostId(viewableItems[0].item.id);
    }
  });

  return (
    <FlatList
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
      showsVerticalScrollIndicator={false}
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={({item}) => (
        <FeedPost isVisible={item.id === activePostId} post={item} />
      )}
    />
  );
};

export default HomeScreen;
