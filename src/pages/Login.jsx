import React, { useState } from 'react'
import { supabase } from '../config/supabase'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginUser = async (event) => {
        event.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            alert(error.message)
        } else {
            navigate('/')
        }
    }

    return (
        <div className="page-container">
            <div className="auth-card">
                <h2>Welcome Back</h2>
                <form onSubmit={loginUser}>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} required />
                    <button className="primary-btn" type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login