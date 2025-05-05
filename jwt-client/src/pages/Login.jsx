import { useState } from "react";
import { signin } from "../api";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, set]   = useState({ u: "", p: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.u || !form.p) return setMsg("Completa todo");
    setLoading(true);
    const d = await signin({ username: form.u, password: form.p });
    setLoading(false);
    if (d.accessToken) { login(d); nav("/"); }
    else setMsg(d.message || "Error");
  };

  return (
    <div className="full-vh-center">
      <form onSubmit={submit} className="card shadow p-4" style={{ width: 350 }}>
        <h3 className="mb-3">Acceso</h3>

        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            className="form-control"
            value={form.u}
            onChange={(e) => set({ ...form, u: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={form.p}
            onChange={(e) => set({ ...form, p: e.target.value })}
          />
        </div>

        <button
          className="btn btn-dark w-100"
          disabled={loading}
        >
          {loading ? "..." : "Entrar"}
        </button>

        {msg && (
          <div className="alert alert-danger mt-3 py-2 text-center" role="alert">
            {msg}
          </div>
        )}
      </form>
    </div>
  );
}
