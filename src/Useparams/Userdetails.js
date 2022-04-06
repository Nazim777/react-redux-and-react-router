import React,{useState, useEffect, useReducer} from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const {id} = useParams()
    
    const [user,setuser] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setuser(resp)
                setloading(true)
            })
        })
    },[])
    


  return (
    <div>
     <div className="container">
         <div className="row">
             <p>id:{user.id}</p>
             <p>name:{user.name}</p>
             <p>username: {user.username}</p>
             <p>email: {user.email}</p>
             <p>phone: {user.phone}</p>
             <p>website:{user.website}</p>
            
             
         </div>
     </div>
    </div>
  )
}

export default Userdetails
