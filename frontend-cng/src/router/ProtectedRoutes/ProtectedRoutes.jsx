import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authServices.js"; 

const ProtectedRoutes = () => {
  const isLoggedIn = isAuthenticated();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
