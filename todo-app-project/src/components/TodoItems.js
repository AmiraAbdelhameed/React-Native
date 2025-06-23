import React, { useEffect } from 'react'
import { FlatList  , Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles }  from '../../styles'
import { FILTRATION_TYPES, setTodos, updateFilter } from '../Redux/todosSlice';
import TodoList from './TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoItems = () => {
    const dispatch = useDispatch();
    const { todos , filter } = useSelector((state) => state.todo)
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const saved = await AsyncStorage.getItem('TODOS');
                if (saved !== null) {
                    dispatch(setTodos(JSON.parse(saved)));
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
  return (
   <>
          <FlatList
              data={todos?.filter((todo) => {
                  if (filter === FILTRATION_TYPES.ALL) return true;
                  if (filter === FILTRATION_TYPES.COMPLETED) return todo.completed;
                  if (filter === FILTRATION_TYPES.IN_PROGRESS) return !todo.completed;
              })}
              style={styles.todosContainer}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TodoList todo={item} />}
          />
   
   </>
  )
}

export default TodoItems
