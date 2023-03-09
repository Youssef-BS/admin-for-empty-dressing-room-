import React,{useEffect,useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/produits");
      setProducts(res.data);
    };

    fetchData();
  }, []);

console.log(products)
  return (
   <>
   <Navbar />
   <div className='container'>
    <div className='products'><h2>les produits</h2>
    {products.map( (product, index) => 
    index < 5 &&  (
          <div className='product' key={product.produit._id} style={{display:"flex"}}>
            <img style={{width:"50px" , borderRadius:"100%" , marginRight:"5px"}} src={product.produit.photoProduit.url} alt="" />
            <p>{product.produit.title}</p>
            <p>{product.produit.marque}</p>
            <p><b>{product.produit.price} DT</b></p>
          </div>
        ))}
    <p style={{textAlign :"center" , cursor:"pointer"}}>voit plus..</p></div>
    <div className='users'><h2>utilisateur</h2><p style={{textAlign :"center" , cursor:"pointer"}}>voit plus..</p></div>
    <div className='product_vendu'><h2>produit vendu</h2><p style={{textAlign :"center" , cursor:"pointer"}}>voit plus..</p></div>
    <div className='product_en_attend'><h2>produit en attents</h2><p style={{textAlign :"center" , cursor:"pointer"}}>voit plus..</p></div>
   </div>
   </>
        


  )
}

export default Home