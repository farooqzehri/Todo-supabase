import React, { useState } from 'react'
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate()

    const loginUser = async (event) => {
        event.preventDefault();
        console.log(email , password);
        const {data , error} = await supabase.auth.signInWithPassword({
            email , password
        })
        if(error){
            console.log(error);    
        }else{
            console.log(data);
            navigate('/')
            
        }
        
    }

  return (
  <>
  <form onSubmit={loginUser}>
    <input type="email" placeholder='Enter your email.' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
    <button type='submit'>Login</button>
  </form>
  </>
  )
}

export default Login