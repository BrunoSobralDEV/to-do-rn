import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { PlusCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from "../../theme";
import { Task } from '../../components/Task';

const tasks = [
  'Estudar Inglês',
]

export function Home() {
  // const [tasks, setTasks] = useState(5);
  
  function handleAddTask() {

  }

  function handleRemoveTask() {

  }
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
          <PlusCircle color='#FFF' size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.counters}>
        <Text style={styles.countersText}>
          Criadas 
          <Text style={styles.countersBadge} >{tasks.length}</Text>
        </Text>
        <Text style={styles.countersTextPurple}>
          Concluídas
          <Text style={styles.countersBadge} >{tasks.length}</Text>
        </Text>
      </View>

      <View style={{width: '100%'}}>
        <FlatList 
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task 
              key={item}
              description={item} 
              // onRemove={() => handleRemoveTask(item)}
            />
          )}    
          showsVerticalScrollIndicator={true}   
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image style={styles.listEmptyImg} source={require('../../../assets/Clipboard.png')}/>
              <Text style={styles.listEmptyText}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )} 
        />
      </View>
    </View>
  )
}