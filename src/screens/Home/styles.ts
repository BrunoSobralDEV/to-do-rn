import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors["gray-600"],
    color: theme.colors['gray-300'],
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 40,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 52,
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    color: theme.colors["gray-100"],
    backgroundColor: theme.colors["gray-500"],
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors["blue-dark"],
  },
  buttonText: {
    color: theme.colors["gray-100"]
  }
})