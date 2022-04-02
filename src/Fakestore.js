import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incnumber,decnumber } from './Action/Action'

const Fakestore = () => {

    const mystate = useSelector((state)=>state.changethenumber);
const dispatch = useDispatch();


    const [product, setproduct] = useState([])
     useEffect (()=>{
         fetch('https://fakestoreapi.com/products').then((result)=>{
             result.json().then((resp)=>{
                 console.log(resp)
                 setproduct(resp)

             })

         })



    } ,[])
  return (
    <div>
        <div className="container">

           <div className='add'>
               <img src="https://cdn2.vectorstock.com/i/1000x1000/36/51/add-to-cart-icon-vector-24873651.jpg" alt="" />
               <h1>{mystate}</h1>
           </div>
            <div className="row">
                {
                    product.map((e)=>{
                       
                        return(
                            <div className="col-md-4" key={e.id}>


<div className="card" style={{width: '18rem'}}>
  <img src={e.image} className="card-img-top fakestore" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>

    <p className="card-text"> {e.category}</p>
    <h6 className="card-title">${e.price}</h6>
   
    
    <button className='btn btn-primary' onClick={(()=>{dispatch(incnumber())})}>add to cart</button>
    <button className='btn btn-primary button' onClick={(()=>{dispatch(decnumber())})}>remove to cart</button>
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

export default Fakestore
