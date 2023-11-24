import React, {FC, useState} from 'react';
import Video from 'react-native-video';
import {View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import colors from '../../theme/colors';

type VideoPlayerProps = {
  uri: string;
  paused: boolean;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({uri, paused}) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        muted={isMuted}
        paused={paused}
        repeat
      />
      <Pressable
        style={styles.muteButton}
        onPress={() => {
          setIsMuted(val => !val);
        }}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
};
