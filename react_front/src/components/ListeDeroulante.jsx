import { useEffect, useState } from "react";



function ListeDeroulante({refer}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://webservice-backoffice-production.up.railway.app/catcom')
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error(error));

    },[]);

    return (
    <div className="mb-1 row">
        <div className="col-sm-3">
            <label className="col-form-label">Categorie : </label>
        </div>
            <div className="col-sm-9">
                <select ref ={refer} class="form-control">
                {data.map((item) => {
                    return (
                        <option  value = {item.id}>{item.typecategorie}</option>
                    );
                    
                })
                }
                </select>
            </div>
            </div>
    )
}

export default ListeDeroulante;
