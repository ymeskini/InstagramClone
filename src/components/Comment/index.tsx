import React, {FC, useState} from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import colors from '../../theme/colors';
import {IComment} from '../../Models';

type ComponentProps = {
  comment: IComment;
  shouldIncludeDetails?: boolean;
};

export const Comment: FC<ComponentProps> = ({
  comment,
  shouldIncludeDetails = false,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.comment}>
      {shouldIncludeDetails && (
        <Image
          source={{
            uri: comment.user.image,
          }}
          style={styles.avatar}
        />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {shouldIncludeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable hitSlop={5} onPress={() => setLiked(v => !v)}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={liked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};
