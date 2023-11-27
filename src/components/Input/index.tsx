import React, {FC, useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type InputProps = {};

export const Input: FC<InputProps> = () => {
  const [comment, setComment] = useState('');

  const onPost = () => {
    console.warn('Posting comment', comment);
    setComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={comment}
        onChangeText={setComment}
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};
