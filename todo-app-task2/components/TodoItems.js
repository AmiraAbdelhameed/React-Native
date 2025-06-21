import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../styles'
import EvilIcons from '@expo/vector-icons/EvilIcons';
const TodoItems = ({ todos, handleDelete })=> {

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{...styles.todoItem  , flexDirection:"row" , justifyContent:"space-between"}}>
                        <View>
                        <Text style={styles.todoTitle}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                        <EvilIcons  name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}

            />
        </View>
    )

}

export default TodoItems
