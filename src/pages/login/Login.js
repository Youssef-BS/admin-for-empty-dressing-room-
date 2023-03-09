import React,{ useState , useContext} from 'react'
import "./login.css"
import {AuthContext} from "../../context/authContext"
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const Navigate = useNavigate()
  const { login } = useContext(AuthContext);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [msg , setMsg] = useState("")
  
  const handleLogin = async (event)=>{
    try{
      if(email === "" || password===""){
        setMsg("choix obligatoire")
      }else{
        setMsg("")
    event.preventDefault();
    // window.location.reload(false);
    await login(email,password);
    Navigate("/home")
   } 
  }catch(error){
      console.log(error)
    }
   }
  return (
    <div className='login'>
    <h1>Login pour admin seulement</h1>
   <p style={{color : "red"}}><b>{msg}</b></p> 
    <input type="text" placeholder='email'  onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
   
    <button onClick={handleLogin}>Login</button>
    </div>
  )
}


export default Login