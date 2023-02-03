const AlertSucess=({message})=>{
    return (
        <div class="alert alert-success mt-1 alert-validation-msg" role="alert">
           <div class="alert-body d-flex align-items-center">
                 <span><strong>Succès : </strong>{message}</span>
            </div>
        </div>
    )
}

export default AlertSucess;