import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todo: {},
    todos: JSON.parse(localStorage.getItem('todos')) ?? []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                _id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        getTodotoUpdate: (state, action) => {
            state.todo = state.todos.filter(todo => todo._id == action.payload)
        },
        updateTodo: (state, action) => {
            const todos = JSON.parse(localStorage.getItem('todos'))
            todos.forEach(todo => {
                if (todo._id === action.payload.id) {
                    todo.text = action.payload.Input
                }
            })
            localStorage.setItem('todos', JSON.stringify(todos))
            state.todos = todos
        },
        removeTodo: (state, action) => {
            const todos = JSON.parse(localStorage.getItem('todos'))
            const setTods = todos.filter(todo => todo._id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(setTods))
            state.todos = setTods
        }
    }
})

export const { addTodo, updateTodo, removeTodo, getTodotoUpdate } = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer; 