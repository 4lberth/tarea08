import { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const [form, set]   = useState({ u: "", e: "", p: "" });
  const [msg,  setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submit = async (e) => {
    e.preventDefault();
    if (!form.u || !form.e || !form.p) return setMsg("Completa todo");
    if (!mailOk.test(form.e))          return setMsg("Email inválido");
    if (form.p.length < 8)             return setMsg("Mínimo 8 caracteres");

    setLoading(true);
    const r = await signup({
      username: form.u,
      email:    form.e,
      password: form.p
    });
    setLoading(false);

    if (r.message) nav("/login");
    else setMsg(r.message || "Error");
  };

  return (
    <div className="full-vh-center">
      <form onSubmit={submit} className="card shadow p-4" style={{ width: 350 }}>
        <h3 className="mb-3">Registro</h3>

        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            className="form-control"
            value={form.u}
            onChange={(e) => set({ ...form, u: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            className="form-control"
            value={form.e}
            onChange={(e) => set({ ...form, e: e.target.value })}
            type="email"
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
          <small className="text-muted">Mínimo 8 caracteres</small>
        </div>

        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "..." : "Registrar"}
        </button>

        {msg && (
          <div className="alert alert-danger mt-3 py-2 text-center">{msg}</div>
        )}
      </form>
    </div>
  );
}
