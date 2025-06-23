import React from 'react'
import { FlatList  , Text} from 'react-native'
import { useSelector } from 'react-redux'
import { styles }  from '../../styles'
import { FILTRATION_TYPES, updateFilter } from '../Redux/todosSlice';
import TodoList from './TodoList';

const TodoItems = () => {
    const { todos , filter } = useSelector((state) => state.todo)

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
