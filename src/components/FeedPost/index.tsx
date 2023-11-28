import React, {FC, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import colors from '../../theme/colors';
import {Comment} from '../Comment';
import {IPost} from '../../types/models';
import {DoublePress} from '../DoublePress';
import {Carousel} from '../Carousel';
import {VideoPlayer} from '../VideoPlayer';

type FeedPostProps = {
  post: IPost;
  isVisible: boolean;
};

export const FeedPost: FC<FeedPostProps> = ({post, isVisible}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  let content = null;

  if (post.image) {
    content = (
      <DoublePress onDoublePress={() => setIsLiked(val => !val)}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
      </DoublePress>
    );
  } else if (post.images) {
    content = (
      <Carousel
        onDoublePress={() => setIsLiked(val => !val)}
        images={post.images}
      />
    );
  } else if (post.video) {
    content = (
      <DoublePress onDoublePress={() => setIsLiked(val => !val)}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePress>
    );
  }

  return (
    <View>
      <View style={styles.header}>
        <Pressable
          style={styles.profileButton}
          onPress={() => {
            navigation.navigate('UserProfile', {userId: post.user.id});
          }}>
          <Image
            style={styles.avatar}
            source={{
              uri: post.user.image,
            }}
          />
          <Text style={styles.username}>{post.user.username}</Text>
        </Pressable>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {content}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={isLiked ? colors.accent : colors.black}
            onPress={() => {
              setIsLiked(val => !val);
            }}
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

        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 3 : 1}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text
          onPress={() => {
            setIsDescriptionExpanded(val => !val);
          }}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        <Text onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
