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
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.desc}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Taille: {product.taille}</li>
                  <li className="list-group-item">Marque: {product.marque}</li>
                  <li className="list-group-item">
                    Prix: <strong>{product.price} DT</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VoirArticle;
