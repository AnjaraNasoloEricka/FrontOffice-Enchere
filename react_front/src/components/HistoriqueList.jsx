import { useEffect, useState } from "react";
import HistoriqueItem from "./HistoriqueItem";

const HistoriqueList=({allhistorique})=>{

    const[allenchere,setallenchere]=useState([]);

    function initData(){
        const url='https://webservice-enchere-production-665e.up.railway.app/enchere';
        fetch(url, {   
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}
        }).then(response => response.json()).then(data=>setallenchere(data.data))
        .catch(error => console.error(error)); 
    }

    useEffect(()=>{
        initData();
    },[])

    return(
        <div>
            {allhistorique.map((item) => {
                return (
                    <HistoriqueItem historique={item} allenchere={allenchere}/>
                );
            })}
        </div>
    );
    
}

export default HistoriqueList;