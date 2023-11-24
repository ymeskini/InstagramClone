import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {IComment} from '../../Models';
import {Comment} from '../../components/Comment';
import {styles} from './styles';

type CommentsScreenProps = {
  comments: IComment[];
};

export const CommentsScreen: FC<CommentsScreenProps> = ({comments}) => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment shouldIncludeDetails comment={item} />}
        style={styles.list}
      />
    </View>
  );
};
