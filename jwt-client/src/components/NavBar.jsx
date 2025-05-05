import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const { auth, logout } = useAuth();
  const roles = auth?.roles || [];

  return (
    <nav className="navbar navbar-expand bg-light px-3 mb-4">
      <Link className="navbar-brand" to="/">Hogar</Link>

      <div className="navbar-nav me-auto">
        {auth && <Link className="nav-link" to="/user">Usuario</Link>}
        {auth && roles.includes("moderator") && <Link className="nav-link" to="/mod">Mod</Link>}
        {auth && roles.includes("admin") && <Link className="nav-link" to="/admin">Admin</Link>}
      </div>

      {!auth ? (
        <>
          <Link className="btn btn-outline-primary me-2" to="/login">Acceso</Link>
          <Link className="btn btn-primary" to="/register">Registro</Link>
        </>
      ) : (
        <button className="btn btn-dark" onClick={logout}>Cerrar sesión</button>
      )}
    </nav>
  );
}
