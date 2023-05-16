import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Command = () => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const fetchCommands = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/payment');
        setCommands(response.data);
      } catch (error) {
        console.error('Error fetching commands:', error);
      }
    };

    fetchCommands();
  }, []);

  console.log(commands);

  return (
    <div className="container">
        <table className='product-full-width'>
        <thead>
        <tr>
          <th>No.C</th>
          <th>client</th>
          <th>Nom</th>
          <th>Email</th>
          <th>produit commander</th>
          <th>titre</th>
          <th>prix</th>
          <th>taille</th>
          <th>destination</th>
          <th>code postale</th>
          <th>num Rue</th>
          <th>adresse Ligne 2</th>
        </tr>
      </thead>
      <tbody>
      {commands.map((command, index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td><img src={command.user ? command.user.photoP.url : ""} alt="" className='user-photo'/></td>
          <td>{command.user ? command.user.name : 'Unknown'}</td>
          <td>{command.user ? command.user.email : 'Unknown'}</td>
          <td><img src={command.commande ? command.commande.photoProduit.url : 'Unknown'} alt="" className='user-photo'/></td>
          <td>{command.commande ? command.commande.title : 'Unknown'}</td>
          <td>{command.commande ? command.commande.price : 'Unknown'}dt</td>
          <td>{command.commande ? command.commande.taille : 'Unknown'}</td>
          <td>{command.commande ? command.myc.ville : 'Unknown'}</td>
          <td>{command.commande ? command.myc.codePoastal : 'Unknown'}</td>
          <td>{command.commande ? command.myc.numRue : 'Unknown'}</td>
          <td>{command.commande ? command.myc.adresseLigne2 : 'Unknown'}</td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
};

export default Command;
