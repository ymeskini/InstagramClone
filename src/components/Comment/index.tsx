import React, {FC} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import colors from '../../theme/colors';
import {IComment} from '../../Models';

type ComponentProps = {
  comment: IComment;
};

export const Comment: FC<ComponentProps> = ({comment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name="hearto" style={styles.icon} color={colors.black} />
    </View>
  );
};
