import React,{useState} from 'react'


const Incanddec = () => {
    const [data, setdata] = useState(1)
    const dec= (()=>{
        if(data>1) {
            setdata(data -1)
        }
    })
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>setdata(data+1)}>inc</button>
        <button onClick={dec}>dec</button>
      
    </div>
  )
}

export default Incanddec
