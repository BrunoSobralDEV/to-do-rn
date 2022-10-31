import { StyleSheet } from 'react-native'
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors['gray-500'],
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    justifyContent: 'space-between',
    padding: 15.27,
    marginBottom: 8,
  },
  text: {
    color: theme.colors['gray-100'],
  }
})