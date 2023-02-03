import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HistoriqueItem=({historique,allenchere})=>{
    const [enchere,setenchere]=useState();
    const statut=["En cours","Termine"];

    function getEnchere(id){
        let en=allenchere.find(x=>x.id==id);
        setenchere(en);
        console.log("n"+en);
    }

    useEffect(()=>{
        getEnchere(historique.idenchere)
    },[])

    const compUtilisateurGagnant = (enchere) => {
        if(enchere?.statut==1){
            return <span className="text-success">{enchere?.utilisateur.nom} {enchere?.utilisateur.prenom}</span>
        }
    }

    return (
        <div class="card">
            <div class="card-body">
            <div class="row my-2">
                                <div class="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <img src="../../../app-assets/auction.png" style={{width:150}} class="img-fluid product-img" alt="product image"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-7">
                                    <h4>{enchere?.nomproduit}</h4>
                                    <span class="card-text item-company">Par <a href="#" class="company-name">{enchere?.utilisateur.nom} {enchere?.utilisateur.prenom}</a></span>
                                    <p class="card-text">Statut : <span class={"text-success"}>{statut[enchere?.statut]}</span></p>
                                    <ul class="product-features list-unstyled">
                                        <li>
                                            <strong>
                                            Montant de votre mise : <span>{historique.montant} Ar </span>
                                            </strong>
                                        </li>
                                        <li>
                                            <strong>
                                            Date de votre mise : <span>{historique.dateenchere} Ar </span>
                                            </strong>
                                        </li>
                                        <li>
                                            Prix de vente : <span>{enchere?.prixmin} Ar </span>
                                        </li>
                                        <li>
                                            Prix de depart : <span>{enchere?.prix} Ar</span>
                                        </li>
                                    </ul>
                                    <hr/>
                                    <hr/>
                                    Gagnant : {compUtilisateurGagnant(enchere)}
                                    <div class="d-flex flex-column flex-sm-row pt-1">
                                    <Link to="/detail" state={{enchere:enchere}} class="btn btn-primary btn-cart waves-effect waves-float waves-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    <span class="add-to-cart">Détails</span>
                                    </Link>
                                    </div>
                                </div>
                            </div>          
            </div>
            
          
        </div>
    );
}

export default HistoriqueItem;