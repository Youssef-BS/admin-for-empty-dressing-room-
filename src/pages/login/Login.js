import React,{useEffect , useState} from 'react'
import "./login.css"


const Login = () => {
  return (
    <div className='login'>
    <h1>Login pour admin seulement</h1>
    <input type="text" placeholder='email' />
    <input type="password" placeholder='password' />
    <button>Login</button>
    </div>
  )
}


export default Login