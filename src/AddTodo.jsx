import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from './assets/features/todoSlice'

function AddTodo() {
    const [Input, setInput] = useState('')
    const [form, setForm] = useState(false)
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (Input) dispatch(addTodo(Input))
        setInput('')
    }

    const handleupateTodo = (e) => {
        e.preventDefault()
        dispatch(updateTodo({ id: todo[0]._id, Input }))
        setForm(false)
        setInput('')
    }
    useEffect(() => {
        if (todo[0]) {
            setForm(true)
            setInput(todo[0].text)
        }
    }, [todo])

    return (
        <div>
            <form onSubmit={form ? handleupateTodo : handleAddTodo}>
                <div>
                    <input type="text"
                        placeholder='Enter Your Todo'
                        value={Input}
                        style={{
                            marginRight: '20px'
                        }}
                        onChange={(e) => setInput(e.target.value)} />
                    {form
                        ? <button type='submit'>update</button>
                        : <button type='submit'>Add</button>}
                </div>
            </form>
        </div>
    )
}

export default AddTodo
