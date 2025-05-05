import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./authContext";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BoardUser from "./pages/BoardUser";
import BoardMod from "./pages/BoardMod";
import BoardAdmin from "./pages/BoardAdmin";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user" element={<PrivateRoute><BoardUser /></PrivateRoute>} />
          <Route path="/mod" element={<PrivateRoute role="moderator"><BoardMod /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute role="admin"><BoardAdmin /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
