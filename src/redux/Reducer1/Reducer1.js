  const initialstate = 0;
  
 export const carthandler = ((state=initialstate, action)=>{
     switch (action.type) {
         case 'ADDTOCART':
             return state +1
             break
        case 'REMOVETOCART':
            return state -1
            break     
     
         default:
             return state 
             
     }

    
})