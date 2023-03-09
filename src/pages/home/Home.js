import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"

const Home = () => {
  return (
   <>
   <Navbar />
   <div className='container'>
    <div className='product'><h2>les produits</h2></div>
    <div className='users'><h2>utilisateur</h2></div>
    <div className='product_vendu'><h2>produit vendu</h2></div>
    <div className='product_en_attend'><h2>produit en attents</h2></div>
   </div>
   </>
        


  )
}

export default Home