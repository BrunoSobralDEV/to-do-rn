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
    marginBottom: 32,
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
  buttonIcon: {
    color: theme.colors["gray-100"]
  },
  counters: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 20,
  },
  countersText: {
    color: theme.colors["blue-dark"],
    fontSize: 14,
    fontWeight: "bold"
  },
  countersTextPurple: {
    color: theme.colors["purple-dark"],
  },
  countersBadge: {
    color: theme.colors["gray-200"],
    backgroundColor: theme.colors["gray-400"],
    padding: 5,
  },
  listEmpty: {
    alignItems: 'center',
  },
  listEmptyImg: {
    marginBottom: 16,
  },
  listEmptyText: {
    color: theme.colors["gray-300"]
  }
})