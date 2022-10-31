import { View, Text } from 'react-native';
import { Trash } from 'phosphor-react-native';

import { Radio } from '../Radio';
import { styles } from "./styles";
import { theme } from '../../theme';

type TaskProps = {
  description: string
}
export function Task({ description }: TaskProps) {
  return (
    <View style={styles.container}>
      <Radio onChangeSelect={() => alert('Oi')}/>
      <Text style={styles.text}>{description}</Text>
      <Trash color={theme.colors['gray-300']}/>
    </View>
  )
}
