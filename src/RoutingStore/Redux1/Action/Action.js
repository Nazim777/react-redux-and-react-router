export const cartitem =(product)=>{
  return{
   type:'ADDITEM',
  payload: product
 
  }
    
   
 }
 export const cartdata = (product) => {
  return{
    type:'DELITEM',
   payload: product
  }
 }

 

