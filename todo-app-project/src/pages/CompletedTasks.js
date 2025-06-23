import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TodoList from '../components/TodoList';
import { styles } from '../../styles';
const CompletedTasks = () => {
    const dispatch =useDispatch();
    const todos = useSelector((state) =>
        state.todo.todos.filter((todo) => todo.completed)
      );
      console.log(todos);
      
    return (
        <>
            <View style={styles.container}>
                <Text >completed task</Text>
            <FlatList 
             data={todos} 
             style={styles.todosContainer} 
             keyExtractor={(item) => item.id} 
             renderItem={(item) => <TodoList todo={item} /> } 
             
             />
            </View>
           
        </>
    )
}

export default CompletedTasks
