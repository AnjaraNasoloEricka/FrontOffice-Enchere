import { useEffect, useRef, useState } from "react";


const InputForm=({nom,refer})=>{
    return (
        <div className="mb-1 row">
            <div className="col-sm-3">
                <label className="col-form-label">{nom}</label>
            </div>
            <div className="col-sm-9">
                <input type="text"className="form-control" ref={refer}/>
            </div>
        </div>


    )
}

export default InputForm;