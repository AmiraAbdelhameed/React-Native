import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import todosSlice, { addToDo } from '../Redux/todosSlice'

const TodoInputs = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleAddTodo = () => {
        if (title.trim()) {
            const todo = {
                id: Date.now(),
                title,
                description,
                completed: false,
            }
            dispatch(addToDo(todo))
            setDescription('')
            setTitle('')
        }

    }
    return (
        <>
            <TextInput
                style={styles.input}
                value={title}
                placeholder='to do title'
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                value={description}
                placeholder='to do description'
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.submitBtn} onPress={handleAddTodo} >
                <Text style={styles.text}>Add ToDo</Text>
            </TouchableOpacity>

        </>
    )
}

export default TodoInputs
