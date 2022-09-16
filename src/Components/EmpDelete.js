import React, { useState } from "react";
import InputId from "./InputId";
import EmpDetailsCard from "./EmpDetailsCard";
import ButtonComp from "./ButtonComp";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function EmpDelete(){
    const navigate = useNavigate();
    const buttonStyle = {
        backgroundColor : "#5bc1fc",
        marginLeft : "650px",
        marginTop: "90px"
    }
    const [gettingId,setgettingid] = useState(null);
    const infoFromchild = (idvalue) =>{
        setgettingid(idvalue);
    } 
    const deleteEmp = () =>{
            const url = `api/emp/${gettingId}`;
        axios.delete(url, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
        })
       .then(response =>{
        console.log(`response.data is :`);
        console.log(response.data);
        })
       .catch(error =>{
        console.log(error)
       })
    }
    return(
        <div>
            <InputId infoFromchild={infoFromchild} />
            <EmpDetailsCard idfetch={gettingId} notEditable={1}/>
            <ButtonComp info={'Delete'} deleteEmp={deleteEmp} deleteOrupdate={1}/> 
            <button onClick={()=>navigate(-1)} style={buttonStyle}>Back To empList</button>
        </div>
    )
    //deleteOrupdate = if this is 1 then delete operation performed if 0 then update operation performed.
}

export default EmpDelete;