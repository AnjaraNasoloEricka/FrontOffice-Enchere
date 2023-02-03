import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaGavel} from 'react-icons/fa';
import axios from "axios";

const CardEnchere=({allcategorie,enchere})=>{

    const statut=["En cours","Termine"];
    const [cat,setCat]=useState();
    const [image,setimage]=useState();

    async function initiateImageEnchere(){
        const url = 'https://webservice-enchere-production-665e.up.railway.app/enchere/encherea/'+enchere.id;
        const response = await axios.get(url, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          setimage(response?.data[0]);
    }



    function getMyCategorie(idcat){
        return (allcategorie.filter(function (el)
        {
        return el.id==idcat;
        }
        ))[0]
 
     }

    useEffect(()=>{
        setCat(getMyCategorie(enchere.categorie.id));
        initiateImageEnchere();
    },[])

    const btnencherir = () => {
        if(enchere.statut==0){
            return (
                <Link to="/Rencherir" state={{enchere:enchere}}class="btn btn-primary btn-cart waves-effect waves-float waves-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    <span class="add-to-cart">Rencherir</span>
                    </Link>
            )
        }
        else{
            return (
                <Link class="btn btn-primary btn-cart waves-effect waves-float waves-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    <span class="add-to-cart">Enchere terminée</span>
                </Link>
            )
        }
    }

    
    return (
        <div className="card ecommerce-card">
                <div>
                    <center>
                        <span className="text-primary"><strong>{cat?.typeCategorie}</strong></span>
                    </center>
                    <hr/>
                    <center>

                    <img style={{objectFit:'cover',objectPosition:'center',height:150,marginTop:20}} src={image?.base8} alt="img-placeholder"/>
                    </center>
                </div>
                <div className="card-body">
                    <h6 className="item-name">
                        <a className="text-primary">{enchere.nomproduit}</a>
                            <span className="card-text item-company">Par <a href="#" className="company-name">{enchere.utilisateur.nom} {enchere.utilisateur.prenom}</a></span>
                    </h6>
                    <div className="item-wrapper">
                        <div>
                            <small className="item-price text-body">{enchere.prix} Ar</small>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <div>
                            <small><span className="text-primary">Debut :</span> {enchere.datedebut}</small>
                            <br/>
                            <small><span className="text-primary">Fin : </span> {enchere.datefin}</small>
                            <br/>
                            <small><span className="text-primary">Statut : </span> {statut[enchere.statut]}</small>
                        </div>
                    </div>
                </div>
                <div class="item-options text-center">
                    {btnencherir()}
                    <Link to="/detail" state={{enchere:enchere}}  class="btn btn-light btn-wishlist waves-effect waves-float waves-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart text-danger"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <span>Voir Détails</span>
                    </Link>
                </div>

        </div>
    )
}

export default CardEnchere;