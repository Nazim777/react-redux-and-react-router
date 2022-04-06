import React,{useEffect,useState} from 'react'

const Weather = () => {

const [search, setsearch] = useState('')
const [person,setperson] = useState('')

    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${person}&APPID=400e8a56a1c308f57a49e8391698bf20`).then((result)=>{
            result.json().then((data)=>{
                console.log(data)
              

            })
        })
       
    },[])
    const hello =() =>{
        if(search !=(' ')){
            setperson(search)
            console.log(person)
        }
    }
   
   
  return (
    <div>
        <div className="contaniner">
            <div className="row">
                <form action="" onSubmit={((e)=>{e.preventDefault()})}>
                    <input type="text" value={search}  onChange={((e)=>{setsearch(e.target.value)})} />
                   <button type='submit' onClick={hello}>search</button>
                </form>
                
                <div className="col-md-4">
                <h6>city name:</h6>
                <p>temperute:</p>
                <p>pressur:</p>
                <p>humidity: </p>


                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Weather
