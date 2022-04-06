import React from 'react'
import { Link , Route, Routes} from 'react-router-dom'
import Service from './Service'

const Dy_routing1 = () => {
    const product = [
        {id:1, name:'shirt',price: 12, category:'male', description: 'this is male t shirt and its very comfortable to wear' },
        {id:2, name:'t-shirt', price: 10, category: 'female', description: 'this is male t shirt and its very',},{id: 3, name :"jacket", price: 18, category: "male and female", description: 'this is male t shirt and its very'}
    ]
  return (
    <div>
        {
            product.map((item)=>{
                return(
                    <div key={item.id}>
                        <Link to={'/product/id/'+item.id}>Name: {item.name}</Link>
                       <Routes>
                        

                        <Route path={'/product/id/'+item.id} element={<Service/>}/>
                       </Routes>

                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Dy_routing1
