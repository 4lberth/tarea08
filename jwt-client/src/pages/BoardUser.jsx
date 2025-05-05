import { useEffect, useState } from "react";
import { getUser } from "../api";
export default () => { const [t,set]=useState(""); useEffect(()=>{getUser().then(set)},[]); return <h3>{t}</h3>; };
