import React, {FC, PropsWithChildren} from 'react';
import {Pressable} from 'react-native';

export const DoublePress: FC<
  PropsWithChildren<{onDoublePress: () => void}>
> = ({children, onDoublePress}) => {
  let lastTap = 0;

  const handledDoublePress = () => {
    const now = Date.now();

    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };

  return <Pressable onPress={handledDoublePress}>{children}</Pressable>;
};
