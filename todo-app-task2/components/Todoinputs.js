import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity  } from 'react-native'
import { styles } from '../styles'

const Todoinputs = ({ setTodos , todos})=> {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
    const [stauts, setStauts] = useState("Active")
    const handleAddTodo = () => {
        setTodos([...todos, { title, description, stauts: "Active", id: Date.now() }]);
        setTitle('');
        setDescription('');
    };
    return (
    <>
           <Text style={{ fontSize: 32, marginBottom: 20, marginTop: 50 }}>TODO APP</Text>
              <TextInput placeholder='To do Title' style={styles.input} value={title}
                onChangeText={setTitle} />
              <TextInput placeholder='To do description' style={styles.input} value={description}
                onChangeText={setDescription} />
              <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo}>
                <Text style={{ ...styles.text }}>Add to do</Text>
              </TouchableOpacity>
              <View style={styles.dividerLine} />
                </>
  
    )
  
}

export default Todoinputs
