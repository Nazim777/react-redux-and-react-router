import React from 'react'
import './App.css'
import Dy_routing from './Routing/Dy_routing'
import Home from './Routing/Home'
import About from './Routing/About'
import Service from './Routing/Service'
import { Link, Route, Routes, } from 'react-router-dom'

  


const App = () => {
  return (
    <div>

<Dy_routing/>


    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/service'}>Service</Link>
    <Routes>
    
      
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='*' exact={true} element={<Home/>}/>
      
   

    </Routes>
    
     
    </div>
  )
}

export default App






