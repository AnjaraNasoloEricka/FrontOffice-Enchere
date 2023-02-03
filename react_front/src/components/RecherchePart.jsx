import { useEffect, useState } from "react";
import { useRef } from "react";
import InputForm from "./InputForm";
import MyCheckBox from "./MyCheckBox";
import InputNumberForm from "./InputNumberForm";
import InputDateForm from "./InputDateForm";

const RecherchePart=({allcategorie,setter})=>{
    const refmotcle=useRef();
    const [idcategorie,setidcategorie]=useState([]);
    const [statut,setstatut]=useState([]);
    const prix1=useRef();
    const prix2=useRef();
    const datemin=useRef(null);
    const datemax=useRef(null);



    
    function search(){
        let prix=[prix1.current.value,prix2.current.value];
        let motcle=refmotcle.current.value;
        let date=[datemin.current.value,datemax.current.value];
        const url='https://webservice-enchere-production-665e.up.railway.app/enchere/search';
        fetch(url, {       
            method:'POST',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify({motcle:motcle,date:date,idcategorie:idcategorie,prix:prix,statut:statut})
        })
        .then(response => response.json())
        .then(data => setter(data.data))
        .catch(error => console.error("misy erreur"+error)); 
    }

    return (
        <div class="sidebar-detached sidebar-left">
                <div class="sidebar">
                    <div class="sidebar-shop">
                        <div class="row">
                            <div class="col-sm-12">
                                <h6 class="filter-heading d-none d-lg-block">Recherche Avancée</h6>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="word">
                                    <ul class="list-unstyled brand-list">
                                    <InputForm nom={"Mot clé :"} refer={refmotcle}/>
                                    </ul> 
                                </div>
                                <div class="word">
                                    <ul class="list-unstyled brand-list">
                                    <InputDateForm nom={"Date Min :"} refer={datemin}/>
                                    <InputDateForm nom={"Date Max :"} refer={datemax}/>
                                    </ul> 
                                </div>
                                <div class="word">
                                    <ul class="list-unstyled brand-list">
                                    <InputNumberForm nom={"Prix Min :"} refer={prix1}/>
                                    <InputNumberForm nom={"Prix Max :"} refer={prix2}/>
                                    </ul> 
                                </div>
                                <div class="brands">
                                    <h6 class="filter-title">Statut</h6>
                                    <ul class="list-unstyled brand-list">
                                        <MyCheckBox id={0} nom={"Non fini"} getter={statut} setter={setstatut}/>
                                        <MyCheckBox id={1} nom={"Fini"} getter={statut} setter={setstatut}/>
                                    </ul> 
                                </div> 
                                <div class="brands">
                                    <h6 class="filter-title">Categorie</h6>
                                    <ul class="list-unstyled brand-list">
                                    {allcategorie.map((item) => {
                                        return (
                                            <MyCheckBox id={item.id} nom={item.typeCategorie} getter={idcategorie} setter={setidcategorie}/>
                                        )
                                    })}
                                    </ul> 
                                </div> 
                                
                                <button class="btn btn-primary" onClick={search}>Rechercher</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default RecherchePart;