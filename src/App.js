import Login from "./pages/login/Login";
import Home from "./pages/home/Home.js";
import { AuthContext } from './context/authContext';
import { useContext } from "react";
import "./app.css"
import { createBrowserRouter, RouterProvider, Outlet , Navigate  } from "react-router-dom";
import VoirAricle from "./pages/voirarticle/VoirAricle";
import VoirProfile from "./pages/voirProfile/VoirProfile";
import TousProduits from "./pages/tousProduits/tousProduits";
import ProduitEnattends from "./pages/produitenattends/ProduitEnattends";
import Utilisateur from "./pages/urilisateurs/Utilisateur";
import Sidebar from "./components/sidebar/Sidebar"; 

function App() {
  const { currentUser } = useContext(AuthContext);
  const Layout = () => {
    return (
      <div className="app">
        
        <Outlet />
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }
  
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/home",
          element :(
            <ProtectedRoute>
              <Sidebar />
              <Home />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/voirproduit/:idproduit",
          element :(
            <ProtectedRoute>
              <Sidebar />
              <VoirAricle />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/voirprofile/:id",
          element :(
            <ProtectedRoute>
              <Sidebar />
              <VoirProfile />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/produitsenattends",
          element :(
            <ProtectedRoute>
              <Sidebar />
              <ProduitEnattends />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/tousproduits",
          element :(
            <ProtectedRoute>
              <Sidebar />
              <TousProduits />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/utilisateur",
          element :(
            <ProtectedRoute>
              <Sidebar />
              <Utilisateur />
            </ProtectedRoute>
          ) ,
        },
    
      ],
    },
  ]);
  return (
    
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
