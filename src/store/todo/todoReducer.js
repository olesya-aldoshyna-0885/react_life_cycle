import { createReducer } from "@reduxjs/toolkit"
import { todoInitialState } from "./initialState"
import { createTodo } from "./actions";

export const todoReducer = createReducer(todoInitialState, {
    // [createTodo]: (state, action) => ({
    //     ...state,
    //     todo: [...state.todo, {...action.payload, ...action.payload}],
    // })
    [createTodo]: (state, action) => 
        {state.todo.push(action.payload)}
    
})