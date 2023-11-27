import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 20,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});
