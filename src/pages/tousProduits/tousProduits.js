import { useState , useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import axios from "axios";
import {Link} from "react-router-dom"
const TousProduits = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get("http://localhost:4000/api/produits");
          setProducts(res.data);
        };
    
        fetchData();
      }, []);
      
  return (
    <>
    <Navbar />
    <div className='products'>
      <h2>Les produits</h2>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Titre</th>
            <th>Marque</th>
            <th>Prix</th>
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
                  <Link to={"/voirproduit/"+product.produit._id}>voir produit</Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>

</>
  )}


export default TousProduits