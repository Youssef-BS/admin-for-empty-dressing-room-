import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VoirArticle = () => {
  const { idproduit } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="container">
      {product ? (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <img
                src={product.photoProduit?.url}
                className="card-img-top"
                alt=""
                style={{width :"600px" , height:"600px" , margin:"auto" , borderRadius:"14px"}}
              />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.title}</li>
                    <li className="list-group-item">{product.desc}</li><br />
                  <li className="list-group-item">Taille: {product.taille}</li>
                  <li className="list-group-item">Marque: {product.marque}</li>
                  <li className="list-group-item">
                    Prix: <strong>{product.price} DT</strong>
                  </li><br />
                  {product.isFetch===false ? (<>
                  <li style={{color : "green"}} onClick={accept}>Accepter</li>
                  <li style={{color : "red"}}>Refuser</li>
                  </>
                  ) : <li>produit deja accepter</li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <style jsx>{`
        .container {
          margin: 100px auto;
          display: flex;
          justify-content: center;
          
          
        }
        .card {
          width: 400px;
          margin : auto;
        }
        .card-title {
          font-size: 24px;
          font-weight: bold;
          margin:auto;
        }
        .card-text {
          font-size: 18px;
          margin: 10px auto;
        }
        .list-group-item {
          font-size: 18px;
          margin-top: 10px;
        }
        strong {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default VoirArticle;
