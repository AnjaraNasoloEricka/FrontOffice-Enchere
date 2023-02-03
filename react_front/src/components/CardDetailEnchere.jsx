import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CardDetailEnchere = () => {
    const[enchere,setenchere]=useState();
    const location=useLocation();
    const statut=["En cours","Termine"];
    const [allimage,setallimage]=useState([]);


    async function initiateImageEnchere(){
        console.log(enchere)
        const url = 'https://webservice-enchere-production-665e.up.railway.app/enchere/encherea/'+enchere.id;
        const response = await axios.get(url, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(response.data);
            setallimage(response.data);
    }

    const compUtilisateurGagnant = (enchere) => {
        if(enchere.statut==1){
            return <span className="text-success">{enchere.utilisateur.nom} {enchere.utilisateur.prenom}</span>
        }
    }

    async function onload(enchere){
        setenchere(enchere);

    }

    const btnencherir = () => {
        if(enchere.statut==0){
            return (
                <div class="d-flex flex-column flex-sm-row pt-1">
                                    <Link to="/Rencherir" state={{enchere:enchere}}class="btn btn-primary btn-cart waves-effect waves-float waves-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    <span class="add-to-cart">Rencherir</span>
                                    </Link>
                                    </div>
            );
        }
    }

    useEffect(()=>{
        onload(location.state.enchere).then(()=>initiateImageEnchere()).then(()=>console.log(allimage));
    },[enchere])

    if(enchere!=null){
    return(
        <div>
        <div class="card">
            <div class="card-body">
            <div class="row my-2">
                                <div class="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <img src={allimage[0]?.base8} style={{width:150}} class="img-fluid product-img" alt="product image"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-7">
                                    <h4>{enchere.nomproduit}</h4>
                                    <span class="card-text item-company">Par <a href="#" class="company-name">{enchere.utilisateur.nom} {enchere.utilisateur.prenom}</a></span>
                                    <p class="card-text">Statut : <span class={"text-success"}>{statut[enchere.statut]}</span></p>
                                    <ul class="product-features list-unstyled">
                                        <li>
                                            Prix de vente : <span>{enchere.prixmin} Ar </span></li>
                                        <li>
                                            Prix de depart : <span>{enchere.prix} Ar</span>
                                        </li>
                                    </ul>
                                    <hr/>
                                    <hr/>
                                    Gagnant : {compUtilisateurGagnant(enchere)}
                                    {btnencherir()}
                                </div>
                            </div>          
            </div>
            
          
        </div>
        <center>
            <h4>Images correspondantes</h4>
            <small>(Peut -être multiple)</small>
        <section id="ecommerce-products" className="grid-view" >
        {
            allimage.map((image)=>{
                return (
                    <div className="card ecommerce-card">
                        <center>
                        <div>
                            <center>
                            <a href="app-ecommerce-details.html">
                                <img className="" style={{objectFit:'cover',objectPosition:'center',height:200}} src={image.base8} alt="img-placeholder"/>
                            </a>
                            </center>
                        </div>
                        </center>
                    </div>
                )
            })
        }
        </section>
        </center>
        </div>
 
    );
    }
}

export default CardDetailEnchere;