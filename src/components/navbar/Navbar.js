import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Home</h1>
        <ul className='liste'>
            <li>Tous Produits</li>
            <li>Produit en attends</li>
            <li>Produits Vendus</li>
            <li>message recus par les clients</li>
        </ul>
    </div>
  )
}

export default Navbar