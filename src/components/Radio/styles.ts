import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  outlineCircle: {
    width: 17.45,
    height: 17.45,
    borderRadius: 8.725,
    borderColor: theme.colors['blue'],
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 7.45,
    height: 7.45,
    borderRadius: 3.725,
    backgroundColor: '#444',
  },
  text: {
    color: theme.colors['gray-100'],
  }
})