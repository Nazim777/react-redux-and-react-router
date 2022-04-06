import React from 'react'
import { Link,Routes, Route } from 'react-router-dom'
import Dyrouting from './Dyrouting'

const Dy_routing = () => {
const data = [ 
    {id:1, name: 'Mohammad Nazi Hossain'},
    {id:2, name: 'Rahim Uddin'}, 
    {id:3, name: 'Karim Uddin'}
]



  return (
    <div>
       {
           data.map((item)=>{
               return(
                   <div>
                       <Link to={'/user/id/'+item.id}>{item.name}</Link>
                       <Routes>
                           <Route path={'/user/id/:id'} element={<Dyrouting/>}></Route>
                       </Routes>

                   </div>
               )
           })
       }
    </div>
  )
}

export default Dy_routing
