import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,

    padding: 5,
    margin: 5,

    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
