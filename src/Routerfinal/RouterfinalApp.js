import React from 'react'
import User1 from './Routerfinal/User1'
import { Routes, Route } from 'react-router-dom'
import Userdetails1 from './Routerfinal/Userdetails1'
import './App.css'

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<User1/>} />
        <Route path='/userdetails/:id' element={<Userdetails1/>} />

      </Routes>
      
      
     
      
      
      
    </div>
  )
}

export default App
