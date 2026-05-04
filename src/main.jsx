import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/todo' element={<Todo/>}/>
  <Route path='register' element={<Register/>}/>
  <Route path='login' element={<Login/>}/>
</Routes>
</BrowserRouter>

)
