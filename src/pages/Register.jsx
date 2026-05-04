import React, { useState } from 'react'
import { supabase } from '../config/supabase'

function Register() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()
        console.log(email , password);
        
        const {data , error} = await supabase.auth.signUp({
            email , password
        })

        if(error) {
            console.log(error.message);
              }else{
                console.log(data);
                alert("check your Emial for conformation.")
                 
              }
    }
  return (
    <>
    <form onSubmit={registerUser}> 
        <input type="email" placeholder='Enter your Email..'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter your Password.' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default Register