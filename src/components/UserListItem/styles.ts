import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  root: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: fonts.weight.bold,
    marginBottom: 5,
  },
  username: {
    color: colors.grey,
  },
});
