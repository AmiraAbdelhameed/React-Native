import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import TodoList from '../components/TodoList';
import { styles } from '../../styles';
const CompletedTasks = () => {
    const todos = useSelector((state) =>
        state.todo.todos.filter((todo) => todo.completed)
      );
      console.log(todos);
      
    return (
        <>
           
            <View style={styles.container}>
                {todos.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No completed tasks</Text>
                    </View>
                ) : (
                    <FlatList
                        data={todos}
                        style={styles.todosContainer}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <TodoList todo={item} />}
                    />
                )}
            </View>
           
        </>
    )
}

export default CompletedTasks
