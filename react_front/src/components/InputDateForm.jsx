import { useEffect, useRef, useState } from "react";



const InputDateForm=({nom,refer})=>{
    return (
        <div className="mb-1 row">
            <div className="col-sm-3">
                <label className="col-form-label">{nom}</label>
            </div>
            <div className="col-sm-9">
                <input type="date"className="form-control" ref={refer}/>
            </div>
        </div>


    )
}

export default InputDateForm;