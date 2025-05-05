import { useEffect, useState } from "react";
import { getAll } from "../api";
export default function Home() {
  const [text, set] = useState("");
  useEffect(() => { getAll().then(set); }, []);
  return <h2>{text || "Public Home"}</h2>;
}
