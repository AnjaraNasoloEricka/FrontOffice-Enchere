import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import CardEnchere from "../components/CardEnchere";
import RecherchePart from "../components/RecherchePart";

const allcategorie=[
    {id:1,nom:"beaute"},{id:2,nom:"sport"}
]
const ListEnchere=()=>{
    const[listenchere,setlistenchere]=useState([]);
    const[allcategorie,setallcategorie]=useState([]);

    function setterList(data){
        if(data!=undefined){
            setlistenchere(data)
        }
    }

    function initiateData(){
        const url='https://webservice-backoffice-production.up.railway.app/categorie';
        fetch(url, {       
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(data => setallcategorie(data.data));
    
    }
    
    function initData(){
        const url='https://webservice-enchere-production-665e.up.railway.app/enchere';
        fetch(url, {   
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}
        }).then(response => response.json()).then(data=>setterList(data.data))
        .catch(error => console.error(error)); 
    }

    useEffect(()=>{
        initiateData();
        initData();
    },[]);

    return (
        <div>
            <RecherchePart allcategorie={allcategorie} setter={setlistenchere}/>
            <div className="content-body">
            <section id="ecommerce-products" className="grid-view" >
                {listenchere.map((item) => {
                    return (
                        <CardEnchere enchere={item} allcategorie={allcategorie}/>
                    )
                })}

            </section>
            </div>
        </div>
    );

}

export default ListEnchere;