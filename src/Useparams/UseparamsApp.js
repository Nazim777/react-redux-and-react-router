import React from 'react'
import Users from './Useparams/Users'
import { Routes, Route } from 'react-router-dom'
import Userdetails from './Useparams/Userdetails'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact={true} element={<Users/>}/>
      <Route path="/userdetails/:id" element={<Userdetails />} />
      </Routes>
     
      
      
      
    </div>
  )
}

export default App