import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles';
const TodoDetails = () => {
    const route = useRoute();
    const { todo } = route.params;
    return (
        <>
            <View style={{ ...styles.container,alignItems:"left" ,padding:20}}>
                  <Text style={{...styles.todoTitle ,fontSize:32 }}>Title: {todo.title}</Text>
                <Text style={{fontSize: 24}}>Description: {todo.description}</Text>
                <Text style={{fontSize: 24}}>Status: {todo.completed ? 'Completed ' : 'Not Completed '}</Text>
                </View>
        </>
    )
}

export default TodoDetails
