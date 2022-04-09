import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {cartitem} from './Redux1/Action/Action'
const Product = () => {
  const dispatch= useDispatch()
  const cartadd= (details) =>{
    dispatch(cartitem(details))
  }
  
  
    const {id} =useParams()
    const [details,setdetails] =useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setdetails(resp)
            })
        })

    },[])
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col-md-4">





                <div className="card bg-dark text-white">
  <img src={details.image} className="card-img" alt="..."/>
  
</div>






                </div>
                <div className="col-md-5">
                    


                <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{details.title}</h5>
    <h6 className='card-title'> {details.category}</h6>
    <p className="card-text">{details.description}</p>
    <h4 className='card-title'>${details.price}</h4>
    <button className='btn btn-primary' onClick={()=>cartadd(details)}>add to cart</button>
    

    
  </div>
</div>




                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Product
