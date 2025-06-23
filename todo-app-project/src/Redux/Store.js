import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import todosSlice from './todosSlice'
const store = configureStore({
    reducer: {
        todo: todosSlice.reducer
    }
})

export default store;