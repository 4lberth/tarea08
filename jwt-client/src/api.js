const API = "http://localhost:3000/api";

// auth
export const signup = (d) =>
  fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(d),
  }).then((r) => r.json());

export const signin = (d) =>
  fetch(`${API}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(d),
  }).then((r) => r.json());

// helpers con token
const authFetch = (url) =>
  fetch(`${API}${url}`, {
    headers: { "x-access-token": localStorage.getItem("token") },
  }).then((r) => r.text());

export const getAll = () => authFetch("/test/all");
export const getUser = () => authFetch("/test/user");
export const getMod = () => authFetch("/test/mod");
export const getAdm = () => authFetch("/test/admin");
