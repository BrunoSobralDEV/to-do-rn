import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { theme } from "../../theme";

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo} 
        source={require('../../../assets/Logo.png')} 
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={theme.colors["gray-300"]}
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}