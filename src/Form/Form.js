import React,{useState} from 'react'

const Form = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState()
  return (
    <div>
        <form action="" onSubmit={((e)=>{e.preventDefault()})}>
            <input type="text" onChange={((e)=>{setname(e.target.value)})} value={name}  placeholder='Enter your name' /> <br /> <br />
            <input type="email" onChange={((e)=>{setemail(e.target.value)})} value={email} required placeholder='Enter your email' /> <br /> <br />
            <input type="password" onChange={((e)=>{setpassword(e.target.value)})} value={password} placeholder='Enter your password' /> <br /> <br />
            <button type='submit' onClick={(()=>{console.log(`name: ${name}, email: ${email} password: ${password}`)})}>submit</button>
            
        </form>
      
    </div>
  )
}

export default Form
