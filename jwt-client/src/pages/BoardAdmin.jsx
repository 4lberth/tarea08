import { useEffect, useState } from "react";
import { getAdm } from "../api";
export default () => { const [t,set]=useState(""); useEffect(()=>{getAdm().then(set)},[]); return <h3>{t}</h3>; };
