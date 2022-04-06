import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'




const Users = () => {

  const [product, setproduct] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        setproduct(resp)
      })
    })
  },[]) 



  return (
    <div>

     <div className="container">
       <div className="row">
         {
           product.map((item)=>{
             return(
               <div key={item.id}>
                 <p>user:{item.id}</p>
                 <p>name: {item.name}</p>
                <NavLink to={`/userdetails/${item.id}`}>details</NavLink> 
               </div>
             )
           })
         }
       </div>
     </div>
      
    </div>
  )
}

export default Users
