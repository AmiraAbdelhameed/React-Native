import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PATHS } from '../Routes/Router'
import TodoInputs from '../components/TodoInputs'
import { styles } from '../../styles'
import TodoItems from '../components/TodoItems'
import TodoFilter from '../components/TodoFilter'

const Home = () => {
    const { navigate } = useNavigation()

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate(PATHS.DETAILS)}>
                    <Text style={{ ...styles.todoTitle, fontSize: 32, color:"#5B3E90"}} >Todo App</Text>
                </TouchableOpacity>
                <TodoInputs />
                <TodoFilter />
                <TodoItems />
            </View>
        </>
    )
}

export default Home

