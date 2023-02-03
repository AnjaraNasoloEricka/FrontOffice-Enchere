import { useEffect, useState } from "react";
import AlertDanger from "../components/AlertDanger";
import HistoriqueList from "../components/HistoriqueList";

const HistoriqueEnchere=()=>{
    const[allenchere,setallenchere]=useState([]);
    const[allhistorique,setallhistorique]=useState([]);
    const [noLogin, setNoLogin] = useState();



    function callWS(iduser){
        const url='https://webservice-enchere-production-665e.up.railway.app/historique/'+iduser;
        fetch(url, {   
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}
        }).then(response => response.json()).then(data=>setallhistorique(data.data))
        .catch(error => console.error(error)); 
    }

    function verifyLocalStorage(){
        let local=localStorage.getItem('user');
        if(local!=null){
            let user=JSON.parse(local);
            callWS(user.id);
        }
        else{
            setNoLogin(<AlertDanger message="Vous devez vous connecter pour acceder à cette page"/>)
        }

    }

    useEffect(()=>{
        verifyLocalStorage();

    },[noLogin])

    return (
        <div>
            <HistoriqueList allhistorique={allhistorique}/>
            {noLogin}
        </div>
    )
}

export default HistoriqueEnchere;