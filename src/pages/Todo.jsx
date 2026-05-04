import React, { useEffect, useState } from 'react'
import { supabase } from '../config/supabase'

function Todo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [todo, setTodo] = useState([])

    const fetchTodo = async () => {
        const { data, error } = await supabase
            .from('todo')
            .select('*')
            .order('created_at', { ascending: false })
        if (!error) setTodo(data)
    }

    const addTodo = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase
            .from('todo')
            .insert([{ Title: title, Desc: description }])
            .select()

        if (!error) {
            setTodo([data[0], ...todo])
            setTitle(''); setDescription('')
        }
    }

    const deleteTodo = async (id) => {
        const { error } = await supabase.from('todo').delete().eq('id', id)
        if (!error) setTodo(todo.filter(t => t.id !== id))
    }

    const editTodo = async (id, oldTitle, oldDesc) => {
        const newTitle = prompt("New Title:", oldTitle)
        const newDesc = prompt("New Description:", oldDesc)
        if (newTitle && newDesc) {
            const { error } = await supabase
                .from('todo')
                .update({ Title: newTitle, Desc: newDesc })
                .eq('id', id)
            if (!error) fetchTodo()
        }
    }

    useEffect(() => { fetchTodo() }, [])

    return (
        <div className="page-container">
            <div className="auth-card" style={{ marginBottom: '20px' }}>
                <h2>Manage Tasks</h2>
                <form onSubmit={addTodo}>
                    <input type="text" placeholder='Task Title' value={title} onChange={(e)=> setTitle(e.target.value)} required />
                    <input type="text" placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)} required />
                    <button className="primary-btn" type='submit'>Add Todo</button>
                </form>
            </div>

            {todo.map(item => (
                <div key={item.id} className="todo-item">
                    <div className="todo-info">
                        <h3>{item.Title}</h3>
                        <p>{item.Desc}</p>
                    </div>
                    <div className="action-btns">
                        <button className="edit-btn" onClick={() => editTodo(item.id, item.Title, item.Desc)}>Edit</button>
                        <button className="delete-btn" onClick={() => deleteTodo(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo