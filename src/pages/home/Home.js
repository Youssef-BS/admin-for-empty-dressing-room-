import React,{useEffect,useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import axios from "axios"
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [users , setUsers] = useState([]);
  const [produitAttents , setProduitAttents] = useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/produits");
      setProducts(res.data);
    };

    fetchData();
  }, []);

 useEffect(()=>{
 const fetchUsers = async()=>{
  const res = await axios.get("http://localhost:4000/api/users");
  setUsers(res.data)
 }
 fetchUsers()
 },[])

 useEffect(()=>{
 const fetchProduitEnattents = async ()=>{
 const res = await axios.get("http://localhost:4000/api/produits/notfetched/select");
 setProduitAttents(res.data)
 }
 fetchProduitEnattents();
 },[])
 console.log(produitAttents)

  return (
    <>
  <Navbar />

  <div className='container'>
  <div className='users'>
      <h2>Utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => 
            index < 5 && (
              <tr key={user._id}>
                <td>
                  <img
                    className='user-photo'
                    src={user.photoP.url}
                    alt='User'
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Link to={"/voirprofile/"+user._id} style={{textDecoration : "none" , color : 'black'}}><b>Voir Profile</b></Link> </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <p className='view-more' >Voir plus..</p>
    </div>
    <div className='products'>
      <h2>Les produits Accepter</h2>
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
          {products.map((product, index) => 
            index < 5 && (
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
                  <Link to={"/voirproduit/"+product.produit._id} style={{textDecoration : "none" , color : 'black'}}><b>voir produit</b></Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <p className='view-more'><Link to ="/tousproduits">Voir plus..</Link></p>
    </div>
  
    <div className='product_vendu'>
      <h2>Produits en attente</h2>
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
          {produitAttents.map((product, index) => 
            index < 5 && (
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
      <p className='view-more'>Voir plus..</p>
    </div>
    <div className='product_en_attend'>
      <h2>Produits Vendu</h2>
      <p className='view-more'>Voir plus..</p>
    </div>
  </div>
</>

  
        


  )
}

export default Home