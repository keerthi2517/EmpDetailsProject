import React,{useState,useEffect} from "react";
import axios from 'axios';
import '../css/delemp.css';
import userpic from '../user pic.jpg';
import SelectId from "./SelectId";
function DelEmp(){
    const [empdata,setEmpdata] = useState([]);
    const [idval,setidval] = useState([0]);
    const childToParent=(childData)=>{
        setidval(childData);
    }
    const loadEmp = ()=>{
        const url = `api/emp/${idval}`;
        axios.get(url, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
        })
       .then(response =>{
        console.log(`response.data is :`);
        console.log(response.data);
        if(response.data){
            let tempData = [];
            tempData.push(response.data);
            console.log(tempData);
            setEmpdata(tempData);
        }
        })
       .catch(error =>{
        console.log(error)
       })
    }
    useEffect(()=>{
        loadEmp();
    },[idval]);
    return(
        <div>
            <div>
                <SelectId childToParent={childToParent}/>
            </div>
            <div className="card">
                <h3 className="heading">Employee Details</h3>
                <div className="left">
                    <img src={userpic} alt="userpic" className="pic"></img>
                </div>
                <div className="smallcard">
                        {
                            empdata.length ? 
                            <div className="information">
                                <label>Employee Id:</label>&nbsp;
                                {empdata[0].Id}<br></br><br></br>
                                <label>Employee Name:</label>&nbsp;
                                {empdata[0].Name}<br></br><br></br>
                                <label>Employee Role:</label>&nbsp;
                                {empdata[0].Role}<br></br><br></br>
                                <label>Reports:</label>&nbsp;
                                {empdata[0].Mname}<br></br><br></br>
                            </div>
                            : ''
                        }
                </div>
            </div>
        </div>
    )
}

export default DelEmp;