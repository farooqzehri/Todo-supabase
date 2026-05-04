import React, { useState } from 'react'
import { supabase } from '../config/supabase'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({ email, password })

        if (error) {
            alert(error.message)
        } else {
            alert("Success! Check your email for the confirmation link.")
        }
    }

    return (
        <div className="page-container">
            <div className="auth-card">
                <h2>Create Account</h2>
                <form onSubmit={registerUser}>
                    <input type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    <button className="primary-btn" type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register