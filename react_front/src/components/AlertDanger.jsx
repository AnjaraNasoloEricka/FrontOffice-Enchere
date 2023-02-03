const AlertDanger=({message})=>{
    return (
        <div class="alert alert-danger mt-1 alert-validation-msg" role="alert">
           <div class="alert-body d-flex align-items-center">
                 <span><strong>Erreur : </strong>{message}</span>
            </div>
        </div>
    )
}

export default AlertDanger;