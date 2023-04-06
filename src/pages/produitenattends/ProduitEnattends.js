import React , {useEffect , useState} from 'react'
import Navbar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProduitEnattends = () => {
  const [produitAttents , setProduitAttents] = useState([])
  
  useEffect(()=>{
    const fetchProduitEnattents = async ()=>{
    const res = await axios.get("http://localhost:4000/api/produits/notfetched/select");
    setProduitAttents(res.data)
    }
    fetchProduitEnattents();
    },[])
  
  return (
    <>
    <Navbar />
    <div className='container'>
      <table className = 'product-full-width'>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Titre</th>
            <th>Marque</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {produitAttents.map((product) => 
           (
              <tr key={product._id}>
                <td>
                  <img
                    className='product-photo'
                    src={product.photoProduit.url}
                    alt='Product'
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.marque}</td>
                <td>
                  <b>{product.price} DT</b>
                </td>
               <td><b style={{cursor:"pointer"}}><Link to={"/voirproduit/"+product._id} style={{textDecoration : "none" , color : 'black'}}>Voir produit</Link></b></td> 
              </tr>
            )
          )}
        </tbody>
      </table>
      
    </div>
    </>
  )
}


export default ProduitEnattends