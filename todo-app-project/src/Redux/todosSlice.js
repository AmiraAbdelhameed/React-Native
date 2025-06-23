import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const FILTRATION_TYPES = {
  ALL: "all",
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
};

const todosSlice = createSlice({
  name:"todos",
  initialState:{todos:[]},
  reducers:{
addToDo:(state , action)=>{
  const newTodo = action.payload;
  state.todos.push(newTodo);
},
removeToDo:(state , action)=>{
  const id = action.payload;
  state.todos = state.todos.filter((todo)=> todo.id != id)
},
completedToDo:(state , action)=>{
  const id = action.payload;
  const todo = state.todos.find((todo)=> todo.id == id)
  if(todo){
    todo.completed = !todo.completed 
  }

},
updateFilter:(state , action)=>{
  const filter = action.payload;
  state.filter = filter
}
  }
})
export const {addToDo , removeToDo , completedToDo , updateFilter} = todosSlice.actions
export default todosSlice;
