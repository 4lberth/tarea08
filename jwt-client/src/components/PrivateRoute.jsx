import { Navigate } from "react-router-dom";
import { useAuth } from "../authContext";


export default function PrivateRoute({ children, role }) {
    const { auth } = useAuth();
    if (auth === null) return null;          
    if (!auth) return <Navigate to="/login" />;
    if (role && !auth.roles.includes(role)) return <Navigate to="/" />;
    return children;
  }
  
