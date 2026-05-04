import React, { useEffect, useState } from 'react'
import { supabase } from '../config/supabase'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data.user) {
        navigate('/login')
      } else {
        setUser(data.user)
      }
    }
    getCurrentUser()
  }, [navigate])

  const userLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="page-container">
      <div className="auth-card">
        <h3>Hello, I am Farooq Zehri</h3>
        <p>Welcome to my app!</p>
        {user && <p style={{color: '#666'}}>Logged in as: {user.email}</p>}
        <button className="logout-btn" onClick={userLogout}>Logout Session</button>
      </div>
    </div>
  )
}

export default Home