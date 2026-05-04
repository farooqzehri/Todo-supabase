import React, { useEffect } from 'react'
import { supabase } from '../config/supabase'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    const getCurrentUser = async () => {
      const {data , error} = await supabase.auth.getUser()
      if(error) {
        console.log(error);  
        navigate('/login')
        return    
      }
      console.log('user:' , data.user);
      
    }
    getCurrentUser()
  } , [])

  const userLogout =async () => {
    const {data , error} = await supabase.auth.signOut()
    navigate('/login')
  }
  return (
    <div>Home
    <button onClick={userLogout}>Logout</button>

    </div>
  )
}

export default Home