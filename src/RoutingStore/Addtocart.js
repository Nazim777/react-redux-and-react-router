import React from 'react'
import { useSelector,useDispatch  } from 'react-redux'
import { remove } from './Reduxtoolkit/CartSlice'



const Addtocart = () => {
  const dispatch = useDispatch()
  const product = useSelector((state)=>state.cart)
  console.log(product)
    
  return (
    <div>
     
       <div className="container">









         {
           product.map((item)=>{
             return(
             <div className="row cartrow">
               



               <div className="col-md-8">
                 <div className="row">
                   <div className="col-md-6 cartimg"><img src={item.image} alt=""   /></div>
                   <div className="col-md-6">{item.title}</div>
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="row">
                   <div className="col-md-6">${item.price}</div>
                   <div className="col-md-6">
                     <button onClick={()=>{dispatch(remove(item.id))}} className='btn btn-primary'>Remove</button>
                   </div>
                 </div>
               </div>




              





             </div>

             )
            
           })
         }
       </div>
      
    </div>
  )
}

export default Addtocart
