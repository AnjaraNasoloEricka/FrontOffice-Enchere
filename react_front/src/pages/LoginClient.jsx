import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertDanger from "../components/AlertDanger";

const LoginClient=()=>{
    const navigate=useNavigate();
    const [erreur,seterreur]=useState();
    const logins=useRef(null);
    const mdp=useRef(null);
    useEffect(()=>{
        localStorage.removeItem('user');
    },[erreur])
    function setuplogin(data){
        if(data.data==null){
            seterreur(<AlertDanger message={"Informations non valides"}/>)
        }
        else{
            localStorage.setItem('user',JSON.stringify(data.data));
            navigate("/");
        }
    }

    function callWSLogin(){
        console.log(mdp.current.value)
        const url='https://webservice-enchere-production-665e.up.railway.app/utilisateur';
        fetch(url, {       
            method:'POST',
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            body: JSON.stringify({logins:logins.current.value,mdp:mdp.current.value})
        }).then(res=>res.json()).then(data=>setuplogin(data));
    }

    return (
        <div class="auth-wrapper auth-basic px-2">
                    <div class="auth-inner my-2">
                        <div class="card mb-0">
                            <div class="card-body">

                                <h4 class="card-title mb-1">Bienvenue sur Enchere! 👋</h4>
                                <p class="card-text mb-2">Veuillez vous connectez pour accéder aux fonctionnalités d'utilisateur</p>

                                    <div class="mb-1">
                                        <label for="login-email" class="form-label">Login</label>
                                        <input type="text" value="janedoe" ref={logins} class="form-control" id="login-email" name="login-email" aria-describedby="login-email" tabindex="1" autofocus=""/>
                                    </div>
                                    <div class="mb-1">
                                        <label for="login-email" class="form-label">Mot de Passe</label>
                                        <input type="password" value="123456" ref={mdp} class="form-control" id="login-password" />
                                    </div>

                                    <button class="btn btn-primary w-100 waves-effect waves-float waves-light" onClick={callWSLogin}>Se connecter</button>
                                    {erreur}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default LoginClient;