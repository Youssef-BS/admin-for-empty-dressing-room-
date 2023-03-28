import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams , useNavigate  } from "react-router-dom";
import "./voirarticle.css";
import Navbar from "../../components/navbar/Navbar";

const VoirArticle = () => {
  const navigate = useNavigate();

  const { idproduit } = useParams();
  const [product, setProduct] = useState(null);
  const [showFormUpdate , setShowFormUpdate] = useState(false);
  const [showdelete , setShowDelete] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categorie, setCategory] = useState("sans categories");
  const [taille, setSize] = useState("");
  const [marque, setBrand] = useState("");
  const [desc , setDesc]=useState("");
  const [isFetch , setAccept] = useState(false)



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/produits/select/${idproduit}`
        );
        setProduct(res.data.product);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [idproduit]);

  const accept =async ()=>{
await axios.put(`http://localhost:4000/api/produits/acceptproduct/${idproduit}`)
window.location.reload(false);
  }

const deleteThisProduct = async()=>{
await axios.delete(`http://localhost:4000/api/produits/deletethisproduct/${idproduit}`);
navigate('/home')

}
  
  const showupdate = ()=>{
  if(showFormUpdate === false){
    setShowFormUpdate(true)
  }
  else {
    setShowFormUpdate(false)
  }
}

const showdeleteC = ()=>{
  if(showdelete===false){
    setShowDelete(true)
  }else{
    setShowDelete(false)
  }
}

const updateProduct = async () =>{
  const updatedProduct = { title, price, categorie, taille, marque , isFetch , desc};
  await axios.put(`http://localhost:4000/api/produits/update/${idproduit}`, updatedProduct);
  window.location.reload(false);
};

  return (
    <> 

    <Navbar />   
    { showFormUpdate ? 
    (
<div className="formupdate">
      <h2>modifier ce produit</h2>
      <input type="text" placeholder="modifier titre" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="modifier price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <select value={categorie} onChange={(e) => setCategory(e.target.value)}>
        <option value="sans categories">Sans categorie</option>
        <option value="femmes">Femmes</option>
        <option value="hommes">Hommes</option>
        <option value="enfants">Enfants</option>
        <option value="animaux">Animaux</option>
        <option value="electroniques">Electroniques</option>
        <option value="maison">Maison</option>
      </select>
      <br />
      <select value={isFetch} onChange={(e) => setAccept(e.target.value)}>
        <option value="true">accepter</option>
        <option value="false">non accepter</option>
        </select>
      <input type="text" placeholder="modifier taille" value={taille} onChange={(e) => setSize(e.target.value)} />
      <input type="text" placeholder="modifier marque" value={marque} onChange={(e) => setBrand(e.target.value)} />
      <input type="text" placeholder="modifier description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <div className="update-no">
        <button onClick={updateProduct}>modifier</button>
        <button onClick={showupdate}>annuler</button>
      </div>
    </div>
    ) : ""
}

{
  showdelete ? (
    <div className="formdelete">
    <h3>vous etes sur de suppimer ce produit !</h3>
    <button className="oui" onClick={deleteThisProduct}>oui</button>
    <button className="nonc" onClick={showdeleteC}>non</button>
    </div>
  ) : ""
}
    <div className="container1">
      {product ? (
        <>
       <div className="contentt">
         <img
                src={product.photoProduit?.url}
                alt=""
                style={{width :"500px" , height:"500px" , margin:"auto" , borderRadius:"14px"}}
              />
               <div className="static">
                <ul >
                    <li >{product.title}</li>
                    <li >{product.desc}</li><br />
                  <li >Taille: {product.taille}</li>
                  <li >Marque: {product.marque}</li>
                  <li>
                    Prix: <strong>{product.price} DT</strong>
                  </li><br />
                  {product.isFetch===false ? (<>
                  <li style={{color : "green"}} onClick={accept}>Accepter</li>
                  
                  </>
                  ) : <li>produit deja accepter</li>
                  }
                  <li className="modifier" onClick={showupdate}>modifier article</li>
                  <li className="supprimer" onClick={showdeleteC}>supprimer le produit</li>
                </ul>
                </div>
                </div>
                
        
        </>
      ) : (
        <p>Loading...</p>
      )}
  
    </div>
    </>
  );
};

export default VoirArticle;
