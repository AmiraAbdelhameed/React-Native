import React, { useState , useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Todoinputs from './components/Todoinputs';
import TodosFilter from './components/TodosFilter';
import TodoItems from './components/TodoItems';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {

  const [todos, setTodos] = useState([]);
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const saved = await AsyncStorage.getItem('TODOS');
        if (saved !== null) {
          setTodos(JSON.parse(saved));
          console.log( saved);          
        }
      } catch (e) {
        console.error('Failed to load todos:', e);
      }
    };
    loadTodos();
  }, []);
  useEffect(() => {
    saveTodos();
  }, [todos]);
  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('TODOS', JSON.stringify(todos));
    } catch (e) {
      console.error('Failed to save todos:', e);
    }
  };
  return (
    <>
      <View style={styles.container}>

        <Todoinputs setTodos={setTodos} todos={todos} />
        <TodosFilter />
        <TodoItems todos={todos} handleDelete={handleDelete} />
      </View>
    </>
  );
}


