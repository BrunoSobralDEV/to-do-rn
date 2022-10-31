import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

type RadioProps = {
  onChangeSelect: () => void;
}

export function Radio({ onChangeSelect }: RadioProps) {
  return (
    <View>
      <TouchableOpacity onPress={onChangeSelect}>
        <View style={styles.outlineCircle}>
          <View style={styles.innerCircle} />
        </View>
      </TouchableOpacity>
    </View>
  )
}
