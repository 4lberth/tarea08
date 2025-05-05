import { useEffect, useState } from "react";
import { getMod } from "../api";
export default () => { const [t,set]=useState(""); useEffect(()=>{getMod().then(set)},[]); return <h3>{t}</h3>; };
