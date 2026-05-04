import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/todo'}>Todo</Link>
    <Link to={'/register'}>register</Link>
    <Link to={'/login'}>Login</Link>
    </>
  )
}

export default Navbar