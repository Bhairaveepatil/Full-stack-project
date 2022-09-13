import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './component/login/login'
import Signup from './component/signup/signup'
import Hero from './component/main/hero'
import './component/signup/signup.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>      
      <Route path='/main' element={<Hero/>}/>      

    </Routes>
    </BrowserRouter>
  )
}

export default App
