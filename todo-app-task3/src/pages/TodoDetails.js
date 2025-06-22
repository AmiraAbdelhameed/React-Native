import { Text, View } from 'react-native'
import { styles } from '../../styles';
import { useRoute } from '@react-navigation/native';
const TodoDetails =()=>{
  const route = useRoute();
  const { todo } = route.params;
    return (
      <View style={{...styles.container , marginTop:80 ,paddingTop:30}}>
        <Text style={styles.todoTitle}>Title: {todo.title}</Text>
        <Text>Description: {todo.description}</Text>
        <Text>Status: {todo.completed ? 'Completed ' : 'Not Completed '}</Text>
      </View>
    )
  
}

export default TodoDetails
