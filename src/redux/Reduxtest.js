import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart, removetocart } from './Action1/Action1'

const Reduxtest = () => {
  const cartdata = useSelector((state)=>state.carthandler)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{cartdata}</h1>
      <button onClick={(()=>{dispatch(addtocart())})}>+</button>
      <button onClick={(()=>{dispatch(removetocart())})}>-</button>
      
      
    </div>
  )
}

export default Reduxtest
