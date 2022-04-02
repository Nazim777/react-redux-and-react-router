import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incnumber,decnumber } from './Action/Action'


const Home = () => {

const mystate = useSelector((state)=>state.changethenumber);
const dispatch = useDispatch();

  
  return (
    <div>
      <h1>{mystate}</h1>
     <button onClick={(()=>{dispatch(incnumber())})}>increment</button>
     <button onClick={(()=>{dispatch(decnumber())})}>decrement</button>
     
    
     
      
    </div>
  )
}

export default Home

