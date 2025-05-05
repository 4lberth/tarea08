// src/authContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthCtx = createContext();
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {

  const [auth, setAuth]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const raw   = JSON.parse(localStorage.getItem("roles") || "[]");
    const roles = raw.map(r => r.replace(/^ROLE_/i, "").toLowerCase());

    if (token) setAuth({ token, roles });
    else       setAuth(false);        

    setLoading(false);
  }, []);

  const login = ({ accessToken, roles }) => {
    const cleanRoles = roles.map(r => r.replace(/^ROLE_/i, "").toLowerCase());

    localStorage.setItem("token", accessToken);
    localStorage.setItem("roles", JSON.stringify(cleanRoles));
    setAuth({ token: accessToken, roles: cleanRoles });
  };

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };

  if (loading) return null;

  return (
    <AuthCtx.Provider value={{ auth, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
