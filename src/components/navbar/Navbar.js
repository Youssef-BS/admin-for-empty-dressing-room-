import React,{useContext} from 'react';
import "./navbar.css";
import {AuthContext} from "../../context/authContext";
import {Link} from "react-router-dom"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  const {logout} = useContext(AuthContext);
  const handleLogout = async (event)=>{
    event.preventDefault();
    window.location.reload(false);
    await logout();
   }
  return (
    <div className='navbar'>
        <h1 style={{cursor : "pointer"}}><Link to="/home" style={{textDecoration : "none" , color : 'black'}}>Home</Link></h1>
        <ul className='liste'>
            <li><Link to="/tousproduits" style={{textDecoration : "none" , color : 'black' , fontSize : '16px'}}>Produits Accepter</Link></li>
            <li><Link to="/produitsenattends" style={{textDecoration : "none" , color : 'black'}}>Produit En Attends</Link></li>
            <li>Produits Vendus</li>
            <li>message recus par les clients</li>
        </ul>
        <div className='profile'>
          <span>
            <h5>admin</h5>
          <h4>{currentUser.user.name}</h4>
          </span>
          
          <img src ={currentUser.user.photoP.url} alt="" />
          <p onClick={handleLogout}>Logout</p>
        </div>
    </div>
  )
}

export default Navbar