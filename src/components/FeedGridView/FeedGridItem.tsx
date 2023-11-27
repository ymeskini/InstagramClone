import React, {FC} from 'react';
import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {IPost} from '../../Models';
import {styles} from './styles';
import colors from '../../theme/colors';

type FeedGreedItemProps = {
  post: IPost;
};

export const FeedGreedItem: FC<FeedGreedItemProps> = ({post}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: post.image || post?.images?.[0],
        }}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={styles.iconCollection}
        />
      )}
    </View>
  );
};
