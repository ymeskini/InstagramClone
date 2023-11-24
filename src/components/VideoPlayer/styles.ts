import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: colors.black,
    padding: 5,

    borderRadius: 25,
  },
});
