import React from 'react'
import './App.css'
import Home from './Router/Home'
import About from './Router/About'
import Service from './Router/Service'
import Pagenotfound from './Router/Pagenotfound'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div>
     <h1>hello</h1>
     <BrowserRouter>


     <Link to="/">Home</Link> <br /> <br />
     <Link to="/about">About</Link> <br /> <br />
     <Link to="/service">Service</Link> <br /> <br />
     <Link to="/pagenotfound">Pagenotfound</Link>
     <Routes>
    
     <Route path="/" exact={true} element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/service" element={<Service />} />
     <Route path="/pagenotfound" element={<Pagenotfound />} />
     <Route path="*" exact={true} element={<Home />} />
    

     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App






