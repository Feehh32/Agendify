import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
