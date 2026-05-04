import React, { useEffect, useState } from 'react'
import { supabase } from '../config/supabase';


function Todo() {
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [todo , setTodo] = useState([])

    const addTodo = async (event) => {
        event.preventDefault();
        console.log(title , description);

        const {data , error} = await supabase 
        .from('todo')
        .insert([{Title: title, Desc: description}])
        .select()
        if (error){
            console.log(error.message);
                       
        }else{
            console.log(data);
                       
        } }

        const fetchTodo = async () => {
            const {data , error} = await supabase
            .from('todo')
            .select('*')
            .order('created_at' , {ascending: false})
            if(error) {
                console.log(error.message);
            }else{
                
                console.log(data)
                setTodo(data)
                
            }

        }
        useEffect( () => {
            fetchTodo()
        }, [])
  return (
   <>
   <form onSubmit={addTodo }> 
    <input type="text" placeholder='Enter your title' value={title} onChange={(e)=> setTitle(e.target.value)} />
    <input type="text" placeholder='Enter your Desx' value={description} onChange={(e)=> setDescription(e.target.value)} />
    <button type='submit'>Add todo</button>
   </form>
   {todo  && todo.map(item => {
    return <div key={item.id}>
        <h1>{item.Title}</h1>
        <h4>{item.Desc}</h4>
    </div>
   }) }
   </>
  )
}

export default Todo