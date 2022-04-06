import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const Userdetails1 = () => {
    const {id} = useParams()
    const [details, setdetails] =useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
               setdetails(resp)
            })
        })
    },[])
  return (
    
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 details">


                <p>id: {details.id}</p>
      <p>name: {details.name}</p>
      <p>username: {details.username}</p>
      <p>email: {details.email}</p>
      <p>phone: {details.phone}</p>
      <p>website: {details.website}</p>

                </div>
            </div>
        </div>
     
      
    
  )
}

export default Userdetails1
