import React from "react";
import '../css/buttoncomp.css'
function ButtonComp(props){
    const methodToPerform =()=>{
        if(props.deleteOrupdate){
            props.deleteEmp();
        }
        else{
            props.updateEmp();        
        }
    }
    return(
        <div>
            <button className="deleteUpdate" onClick={methodToPerform}>{props.info}</button>
        </div>
    )
}

export default ButtonComp;