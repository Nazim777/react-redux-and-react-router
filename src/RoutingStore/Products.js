import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [product, setproduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((result)=>{
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
                    <div className="col-md-4" key={item.id}>



<div className="card image" style={{width:'18rem'}}>
  <img src={item.image} className="card-img-top "  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <NavLink className="btn btn-primary" to={`/product/${item.id}`}>Buy Now</NavLink>
   
   
  </div>
</div>






                    </div>
                )
            })
        }
    </div>
</div>


      
    </div>
  )
}

export default Products
