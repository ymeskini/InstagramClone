import React, {FC} from 'react';
import {FlatList, View} from 'react-native';

import comments from '../../data/comments.json';
import {Comment} from '../../components/Comment';
import {styles} from './styles';
import {Input} from '../../components/Input';

export const CommentsScreen: FC = () => {
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
