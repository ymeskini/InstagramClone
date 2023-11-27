import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,

    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
  },
  inputLabel: {
    width: 75,
  },
  inputWrapper: {
    flex: 1,
  },
});
