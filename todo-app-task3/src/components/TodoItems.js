import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../../styles'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PATHS } from '../Routes/Router';
import { useNavigation } from '@react-navigation/native';
const TodoItems = ({ todos, handleDelete, IsCompleted }) => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            ...styles.todoItem,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            opacity: item.completed ? 0.5 : 1,
                        }}
                        onPress={() => navigate(PATHS.DETAILS, { todo: item })}
                    >
                        <View style={{ opacity: item.completed ? 0.5 : 1 }}>
                            <Text
                                style={{
                                    ...styles.todoTitle,
                                    color: item.completed ? 'green' : 'black',
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text>{item.description}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons
                                name="done"
                                size={24}
                                color={item.completed ? 'green' : 'black'}
                                onPress={() => IsCompleted(item.id)}
                            />
                            <EvilIcons
                                name="trash"
                                size={24}
                                color="black"
                                onPress={() => handleDelete(item.id)}
                            />
                        </View>
                    </TouchableOpacity>
                )}

            />
        </View>
    )

}

export default TodoItems
