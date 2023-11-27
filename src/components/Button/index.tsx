import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  text: string;
  onPress?: () => void;
};
const noop = () => {};

export const Button: FC<ButtonProps> = ({text, onPress = noop}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
