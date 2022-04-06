import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const User1 = () => {
const [user, setuser] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
            setuser(resp)
        })
    })
},[])

  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    user.map((item)=>{
                        return(
                            <div className="col-md-4 py-4 users" key={item.id}>
                            
                                <p>user: {item.id}</p>
                                <p>name: {item.name}</p>
                                <NavLink className='nav' to={`/userdetails/${item.id}`} >see details</NavLink>
                           
                            </div>
                        )
                    })

                }
            </div>
        </div>
      
    </div>
  )
}

export default User1
