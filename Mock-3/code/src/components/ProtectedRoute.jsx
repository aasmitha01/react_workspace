import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, role }) {
  const { auth } = useContext(AuthContext);


  if (!auth.isLoggedIn) {
    return <Navigate to="/" />;
  }


  if (role && auth.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
