import React, {FC} from 'react';
import {FlatList} from 'react-native';

import {IPost} from '../../types/models';
import {FeedGreedItem} from './FeedGridItem';

type FeedGridViewProps = {
  data: IPost[];
  ListHeaderComponent: FC;
};

export const FeedGridView: FC<FeedGridViewProps> = ({
  data,
  ListHeaderComponent,
}) => {
  return (
    <FlatList
      style={{
        marginHorizontal: -1,
      }}
      data={data}
      renderItem={({item}) => <FeedGreedItem post={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
