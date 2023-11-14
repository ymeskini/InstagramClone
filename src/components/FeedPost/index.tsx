import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import colors from '../../theme/colors';

type FeedPostProps = {
  post: any;
};

export const FeedPost: FC<FeedPostProps> = ({post}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: post.user.image,
          }}
        />
        <Text style={styles.username}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.bookmark}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>lgrinevicius</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        <Text>View all {post.nofComments} comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>ymeskini</Text> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Text>
          <AntDesign name="hearto" style={styles.icon} color={colors.black} />
        </View>
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
