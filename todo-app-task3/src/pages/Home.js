import React ,{useState , useEffect} from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles';
import  Todoinputs  from '../components/Todoinputs'
import  TodosFilter  from '../components/TodosFilter'
import  TodoItems  from "../components/TodoItems"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home =()=>{
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState(false)
    const [filter, setFilter] = useState('All');
    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    const IsCompleted=(id)=>{
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          );
    }
    console.log("hello form home");
    
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const saved = await AsyncStorage.getItem('TODOS');
                if (saved !== null) {
                    setTodos(JSON.parse(saved));
                    console.log(saved);
                }
            } catch (e) {
                console.error('Failed to load todos:', e);
            }
        };
        loadTodos();
    }, []);
    useEffect(() => {
        saveTodos();
    }, [todos]);
    const saveTodos = async () => {
        try {
            await AsyncStorage.setItem('TODOS', JSON.stringify(todos));
        } catch (e) {
            console.error('Failed to save todos:', e);
        }
    };
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'Active') return !todo.completed;
        if (filter === 'Done') return todo.completed;
        return true; // All
      });
    return (
    
            <View style={styles.container}>
            <Todoinputs setTodos={setTodos} todos={todos} completed={completed} />
            <TodosFilter filter={filter} setFilter={setFilter} />
            <TodoItems todos={filteredTodos}  handleDelete={handleDelete} IsCompleted={IsCompleted}  />
            </View>
     
    );
  
}


export default Home;
