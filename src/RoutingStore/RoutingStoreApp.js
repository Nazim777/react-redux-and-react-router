import React from 'react'
import './App.css'
import Products from './RoutingStore/Products'
import { Routes,Route } from 'react-router-dom'
import Product from './RoutingStore/Product'
import Addtocart from './RoutingStore/Addtocart'
import Header from './RoutingStore/Header'
const App = () => {
  return (
    <div>
     
      
      
      <Header/>
      <Routes>
        <Route path='/' exact={true} element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/addtocart' element={<Addtocart/>}/>

        
      </Routes>
      
     
      
      
      
    </div>
  )
}

export default App
