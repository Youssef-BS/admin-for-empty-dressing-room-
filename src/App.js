import Login from "./pages/login/Login";
import Home from "./pages/home/Home.js";
import { AuthContext } from './context/authContext';
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet , Navigate  } from "react-router-dom";
import VoirAricle from "./pages/voirarticle/VoirAricle";
import VoirProfile from "./pages/voirProfile/VoirProfile";
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
              <Home />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/voirproduit/:idproduit",
          element :(
            <ProtectedRoute>
              <VoirAricle />
            </ProtectedRoute>
          ) ,
        },
        {
          path: "/voirprofile/:id",
          element :(
            <ProtectedRoute>
              <VoirProfile />
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
