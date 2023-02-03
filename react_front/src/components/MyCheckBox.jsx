import { useEffect } from "react";

const MyCheckBox=({id,nom,getter,setter})=>{


    const handleChange=(e)=>{
        const {value,checked}=e.target;
        let valueTab= getter;
        if(checked==true){
            valueTab.push(value);
        }
        else{
            valueTab=valueTab.filter((e)=>e!==value);
        }
        setter(valueTab);
    }

    return (
        <div class="form-check">
            <input type="checkbox" class="form-check-input" value={id} onChange={handleChange}/>
                <label class="form-check-label" for="productBrand1">{nom}</label>
        </div>
    );
}

export default MyCheckBox;