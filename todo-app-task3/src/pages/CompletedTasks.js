import React, { Component, useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../styles';
const CompletedTasks=()=> {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const loadCompletedTasks = async () => {
      try {
        const tasks = await AsyncStorage.getItem('TODOS');
        if (tasks !== null) {
          const parsed = JSON.parse(tasks);
          const filtered = parsed.filter((t) => t.completed);
          setCompletedTasks(filtered);
          console.log(filtered)
        }
      } catch (e) {
        console.error('Failed to load todos:', e);
      }
    };

    loadCompletedTasks();
  }, []);

    return (
      <View style={{...styles.container , marginTop:80 ,paddingTop:30}}>
        <Text style={styles.todoTitle}>Completed Tasks</Text>
        {completedTasks.length === 0 ? (
          <Text>No completed tasks yet.</Text>
        ) : (
          <FlatList
            data={completedTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <Text style={{ color: 'green' }}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            )}
          />
        )}
      </View>
    )

}

export default CompletedTasks
