import { useEffect, useRef, useState } from "react";



const InputNumberForm=({nom,refer})=>{
    return (
        <div className="mb-1 row">
            <div className="col-sm-3">
                <label className="col-form-label">{nom}</label>
            </div>
            <div className="col-sm-9">
                <input type="number"className="form-control" ref={refer}/>
            </div>
        </div>


    )
}

export default InputNumberForm;