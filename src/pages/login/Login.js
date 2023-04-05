import React,{ useState , useContext} from 'react'
import "./login.css"
import {AuthContext} from "../../context/authContext"
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <>
    <div className='login'>
    <h1>admin connexion</h1>
    <hr />
   <p style={{color : "red"}}><b>{msg}</b></p> 
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
    </Form>
    
    </div>
    </>
  )
}


export default Login