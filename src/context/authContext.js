import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email , password) => {
    const res = await axios.post("http://localhost:4000/api/users/login", {
        email , password
    }, 
    {
      withCredentials: false,
    },
    {
    headers: {'Content-Type': 'application/json'}
    }
    
    );

    setCurrentUser(res.data)
    console.log(res.data)
  };

    const logout = async()=>{
      localStorage.removeItem("user");
  };
    
useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login , logout }}>
      {children}
    </AuthContext.Provider>
  );
};