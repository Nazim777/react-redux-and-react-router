import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagCheckFill } from "react-icons/bs";
import { useSelector } from 'react-redux';


const Header = () => {
  const state = useSelector((state)=>state.carthandler)
  
 
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <Link className='navbar-brand' to={'/'}>E-Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         
          <Link  className="nav-link active"  to="/">Home</Link>
        </li>
       
      
       
      </ul>
     

      <div className="d-flex">
      <Link to={'/addtocart'} ><BsFillBagCheckFill size={'2rem'}   color='cyan'/></Link> 
      <div className="d-flex"><h1 className='zero'>{state.length}</h1></div>
      
     
     
      </div>
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Header