import { useState , useEffect } from 'react';
import Navbar from '../../components/sidebar/Sidebar';
import axios from "axios";
import {Link} from "react-router-dom"
const TousProduits = () => {
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get("http://localhost:4000/api/produits");
          setProducts(res.data);
        };
        
        setLoading(false)
        fetchData();
      }, []);
      
  return (
    <>
    <Navbar />
    {loading ? (<p style={{textAlign : "center"}}>Loading...</p>) : (
    <div className='container'>
      <table className = 'product-full-width'>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Titre</th>
            <th>Marque</th>
            <th>Prix</th>
            <th>consulter</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => 
           (
              <tr key={product.produit._id}>
                <td>
                  <img
                    className='product-photo'
                    src={product.produit.photoProduit.url}
                    alt='Product'
                  />
                </td>
                <td>{product.produit.title}</td>
                <td>{product.produit.marque}</td>
                <td>
                  <b>{product.produit.price} DT</b>
                </td>
                <td>
                  <Link to={"/voirproduit/"+product.produit._id} className='link'>voir produit</Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    )}

</>
  )}


export default TousProduits