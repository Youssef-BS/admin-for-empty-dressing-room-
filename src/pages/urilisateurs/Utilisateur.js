import React , {useEffect , useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Utilisateur = () => {
const [users , setUsers] = useState([])
    useEffect(()=>{
        const fetchUsers = async()=>{
         const res = await axios.get("http://localhost:4000/api/users");
         setUsers(res.data)
        }
        fetchUsers()
        },[])



  return (
    <div className='container'>
    <table className='product-full-width'>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Consulter</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => 
           (
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
              <td><Link to={"/voirprofile/"+user._id} className='link'><b>Voir Profile</b></Link> </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
  )
}

export default Utilisateur ;