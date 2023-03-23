import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./voirarticle.css";

const VoirArticle = () => {
  const { idproduit } = useParams();
  const [product, setProduct] = useState(null);
  const [showFormUpdate , setShowFormUpdate] = useState(false);
  const [showdelete , setShowDelete] = useState(false);

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

  return (
    <>    
    { showFormUpdate ? 
    (
    <div className="formupdate">
    <h2>modifier ce produit</h2>
      <input type="text" placeholder="modifier titre"/>
      <input type="text" placeholder="modifier price" />
      <select >
            <option value="sans categories" >Sans categorie</option>
            <option value="femmes">Femmes</option>
            <option value="hommes">Hommes</option>
            <option value="enfants">Enfants</option>
            <option value="animaux">Animaux</option>
            <option value="electroniques">Electroniques</option>
            <option value="maison">Maison</option>
          </select><br />
      <input type="text" placeholder="modifier taille"/>
      <input type="text" placeholder="modifier marque"/>
      <div className="update-no">
        <button>modifier</button>
        <button onClick={showupdate}>annuler</button>
      </div>
      
    </div>
    ) : ""
}

{
  showdelete ? (
    <div className="formdelete">
    <h3>etre vous sure de suppimer ce produit ?</h3>
    <button className="oui">oui</button>
    <button className="non" onClick={showdeleteC}>non</button>
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
                  <li style={{color : "red"}}>Refuser</li>
                  
                  </>
                  ) : <li>produit deja accepter</li>
                  }
                  <li className="modifier" onClick={showupdate}>modifier article</li><br />
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
