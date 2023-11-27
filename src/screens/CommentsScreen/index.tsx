import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {IComment} from '../../types/models';
import {Comment} from '../../components/Comment';
import {styles} from './styles';
import {Input} from '../../components/Input';

type CommentsScreenProps = {
  comments: IComment[];
};

export const CommentsScreen: FC<CommentsScreenProps> = ({comments}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment shouldIncludeDetails comment={item} />}
        style={styles.list}
      />
      <Input />
    </View>
  );
};
