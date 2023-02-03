import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { redirect, useLocation } from "react-router-dom";
import AlertSucess from "../components/AlertSuccess";
import BtnUpdateCategorie from "../components/BtnUpdateCategorie";
import InputForm from "../components/InputForm";
import InputNumberForm from "../components/InputNumberForm";
import AlertDanger from "../components/AlertDanger";

const Rencherir=()=>{
    const navigate=useNavigate();
    const location = useLocation();
    const[idenchere,setidenchere]=useState(location.state.enchere.id);
    const[iduser,setiduser]=useState();
    const [succes,setsuccess]=useState();
    const [erreur,seterreur]=useState();
    const[montant,setmontant]=useState(null);
    const[solde,setsolde]=useState();
    const pref=useRef(null);

    function update(){
        if(pref.current.value!=null){
            setmontant(pref.current.value);
            updateData(montant);
        }

    }


    function alertorSuccess(data){
        if (data.succes != undefined) {
            setsuccess(<AlertSucess message={"enchere bien pris en compte"}/>);
        }
        else{
            seterreur(<AlertDanger message={data.erreur.message}/>)
        }

    }

    function soldesetter(iduser){
        const url='https://webservice-enchere-production-665e.up.railway.app/soldeUtilisateur/'+iduser;
        fetch(url, {       
            method:'GET',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then((response)=>response.json()
        ).then((data)=>setsolde(data.data));
    }

    function updateData(pourcentage){
        const url='https://webservice-enchere-production-665e.up.railway.app/historique';
        fetch(url, {       
            method:'POST',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify({idutilisateur:iduser, idenchere:idenchere,montant:pourcentage})
        }).then((response)=>response.json()
        ).then((data)=>alertorSuccess(data));
    }


    function checkLocalStorage(){
        let local=localStorage.getItem('user');
        if(local==null){
            navigate("/LoginClient");
        }
        else{
            setiduser(JSON.parse(local).id);
            soldesetter(JSON.parse(local).id);
        }
     
      }

    useEffect(()=>{
        checkLocalStorage();
       
    },[pref.current,succes])

    return (
        <div class="col-12">
        <div className="card">
            <div className="card-header">
                <h5 class="text-primary">Rencherir</h5>
            </div>
            <div className="card-body">
                <hr></hr>
                <h5>Solde : {solde} Ar</h5>
                <div className="table-responsive">
                <InputNumberForm nom={"montant"} refer={pref}/>
                <BtnUpdateCategorie click={update}/>
                </div>
                {succes}
                {erreur}
            </div>
        </div>
    
    </div>
    )


}

export default Rencherir;