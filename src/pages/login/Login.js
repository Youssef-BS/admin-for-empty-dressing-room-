import React,{useEffect , useState , useContext} from 'react'
import "./login.css"
import { AuthContext } from "../../context/authContext";


const Login = () => {
  const { login } = useContext(AuthContext);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const handleLogin = async (event)=>{
    event.preventDefault();
    // window.location.reload(false);
    await login(email,password);
   }
  return (
    <div className='login'>
    <h1>Login pour admin seulement</h1>
    <input type="text" placeholder='email'  onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
    <button>Login</button>
    </div>
  )
}


export default Login