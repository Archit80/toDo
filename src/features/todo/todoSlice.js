import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
    {
        id:1, text: "HELLO JEE"
    },
    {
        id:2, text: "HIIIEEE"
    }
]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo)
         },
        deleteTodo: (state, action) => { 
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state,action) => {
            const todo = state.todos.find((todo)=>todo.id === action.payload.id)
            if(todo) todo.text = action.payload.text
        }
     }
    
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer