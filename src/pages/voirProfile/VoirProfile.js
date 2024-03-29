import React,{ useEffect, useState} from 'react'
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";
import "./voirprfl.css"




const VoirProfile = () => {
    const { id } = useParams();
    const [produit , setProduits] = useState([]);
    const [user , setUsers]= useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
     const fetchData = async ()=>{
      const res = await axios.get(`http://localhost:4000/api/produits/${id}`);
      setProduits(res.data);
}
fetchData();
})

useEffect(()=>{
const fetchUser = async ()=>{
const res = await axios.get(`http://localhost:4000/api/users/${id}`)
setUsers(res.data)
}
fetchUser()
},[])

const deleteUser = async ()=>{
  await axios.delete(`http://localhost:4000/api/users/${id}`);
  navigate('/utilisateur');
}     

return (
  <div className='utilisateur'>
   

{/* <img src={user.photoP.url} alt=''/> */}
<h3 style={{display :"block" , textAlign : "center"}}>Profile de {user.name}</h3>
<div className='Gerer'>
      <p className='supprimer' onClick={deleteUser}>suppimer</p>
      <p className='modifier'>modifier</p>
    </div>
<div className='stat'>
<img src={user.photoP?.url} alt="" />
<p>{user.name}</p>
<p>{user.email}</p>
   

</div>
<h3>Article Disponible</h3>
  <div className='content'>
    
    {produit.map(item=>(
      <div className='product' key={item._id}>
        <span><img src={item.photoProduit.url} alt ="" /></span>
        <div className='sta'>
        <p>{item.title}</p>
        <p> {item.marque}</p>
        <p><b>{item.price} DT</b></p>
        <div className='Modification'>
        <span className='delete' >Supprimer</span>
        <span className='delete' style={{marginLeft:"8px"}}>consulter produit</span>
        </div>
        </div>
</div>

   
    
    ))}
        </div>
  </div>
  )
}

export default VoirProfile   