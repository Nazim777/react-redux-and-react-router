import React,{useReducer} from 'react'

const initialstate = 0;

const reducer  = ((state, action)=>{


  if(action.type=='increment') {
    return(
      state +1
    )
  }
  if(action.type=='decrement') {
    return(
      state -1
    )
  }
return state
})


const UseReducer = () => {


    const [state, dispatch] = useReducer(reducer, initialstate)

  return (
    <div>


<h1>{state}</h1>
      <button onClick={(()=>{dispatch({type:'increment'})})}>increment</button>
      <button onClick={(()=>{dispatch({type:'decrement'})})}>decrement</button>
      
      
    </div>
  )
}

export default UseReducer
