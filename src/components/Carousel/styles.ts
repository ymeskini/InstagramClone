import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {aspectRatio: 1},
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  dot: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
    marginHorizontal: 5,
  },
});
