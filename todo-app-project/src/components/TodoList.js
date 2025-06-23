import React from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { completedToDo, removeToDo } from '../Redux/todosSlice'
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from '../../styles';
import { PATHS } from '../Routes/Router';
import { useNavigation } from '@react-navigation/native';

const TodoList = ({ todo }) => {
    const dispatch = useDispatch()
    const { navigate } = useNavigation()
    return (
        <>
            <TouchableOpacity style={{...styles.todoItem , flexDirection:'row', justifyContent:"space-between"}} activeOpacity={0.7}>
                <Text
                    onPress={() => navigate(PATHS.DETAILS, { todo })}
                    style={{
                        fontSize: 20,
                        fontWeight: "300",
                        textDecorationLine: todo.completed ? "line-through" : "none",
                        color:"#5B3E90"
                    }}
                >{todo.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Feather
                        name="trash"
                        size={20}
                        color="red"
                        onPress={() => dispatch(removeToDo(todo.id))}
                    />

                    <AntDesign
                        name={todo.completed ? "checkcircle" : "checkcircleo"}
                        size={20}
                        color="#5B3E90"
                        onPress={() => dispatch(completedToDo(todo.id))}
                    />
                </View>
            </TouchableOpacity>

        </>
    )
}

export default TodoList
