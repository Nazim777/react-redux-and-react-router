import React from 'react'

const Filter = () => {
    const data= [2,4,5,6,7,8,3,2,11,55,7,]
    const data1 = data.filter((e)=>e>7)
   const team = [
       {
           name:'Mohammad',
           position:'Developer'
       },
       {
           name:'Rahim',
           position: 'Seniour Developer'
       },
       {
           name: 'Karim',
           position: 'Developer'
       },
       {
           name:'Rahman',
           position: 'Seniour Developer'
       },
       {
           name: 'Ajij',
           position: 'Developer'
       }
   ]
const team1= team.filter((e)=>e.position=='Developer')
console.log(team1)



  return (
    <div>
      
    </div>
  )
}

export default Filter
