import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
export default function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [stauts , setStauts] =useState("Active")
  const handleAddTodo = () => {
    setTodos([...todos, { title, description, stauts: "Active", id: Date.now() }]);
    setTitle('');
    setDescription('');
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, marginBottom: 20, marginTop: 50 }}>TODO APP</Text>
      <TextInput placeholder='To do Title' style={styles.input} value={title}
        onChangeText={setTitle} />
      <TextInput placeholder='To do description' style={styles.input} value={description}
        onChangeText={setDescription} />
      <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
        <Text style={{ ...styles.text }}>Add to do</Text>
      </TouchableOpacity>
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        
      />
    </View>
  );
}


