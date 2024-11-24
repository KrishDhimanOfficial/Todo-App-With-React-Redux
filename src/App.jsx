import { useEffect, useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, getTodotoUpdate } from './assets/features/todoSlice'
import AddTodo from './AddTodo'

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  return (
    <>
      <div>
        <AddTodo />
        <h1>Todo List</h1>
        <div>
          <ul>
            {todos.map((todo, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                {todo.text}
                <button type='button'
                  style={{ margin: ' 0 0 0 60px' }}
                  onClick={() => { dispatch(getTodotoUpdate(todo._id)) }}>
                  update
                </button>
                <button type='button'
                  style={{ margin: ' 0 0 0 10px' }}
                  onClick={() => { dispatch(removeTodo(todo._id)) }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
