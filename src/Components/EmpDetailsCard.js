import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/delemp.css';
import userpic from '../user pic.jpg';
function EmpDetailsCard(props){
    const [empDetails,setempDetails] = useState([]);
    const [editemp,seteditemp] = useState([])
    const [noData,setnoData] = useState(0); //this noData variable is to check if the data received from backend null or not.
                                            //if null then we display no data with emp id given found..else we just display the emp details
    const getEmpDetails=()=>{
        if(props.idfetch){
            const url = `api/emp/${props.idfetch}`;
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
            console.log(props.idfetch)
            setempDetails(tempData)
            seteditemp(tempData[0])
        }
        else{
            if((props.idfetch!==null) && (response.data === null)){
                setempDetails([]);
                seteditemp([]);
                setnoData(1);
            }
        }
        })
       .catch(error =>{
        console.log(error)
       })
      }
    }
    const editDetails = e =>{
        seteditemp({...editemp,
            [e.target.name]:e.target.value
         })
         console.log(`the received value is :${e.target.value}`);
        //  console.log(editemp);
         props.setdetails({...editemp,
            [e.target.name]:e.target.value
         })
    }
    useEffect(()=>{
       getEmpDetails()
       //eslint-disable-next-line
    },[props.idfetch])
    return(
        <div>
            <div className="card">
                <h3 className="heading">Employee Details</h3>
                <div className="left">
                    <img src={userpic} alt="userpic" className="pic"></img>
                </div>
                    <div className="smallcard">
                    {     
                           props.notEditable?
                            empDetails.length ? 
                            <div className="information">
                                <label>Employee Id:</label>&nbsp;
                                {empDetails[0].Id}<br></br><br></br>
                                <label>Employee Name:</label>&nbsp;
                                {empDetails[0].Name}<br></br><br></br>
                                <label>Employee Role:</label>&nbsp;
                                {empDetails[0].Role}<br></br><br></br>
                                <label>Reports:</label>&nbsp;
                                {empDetails[0].Mname}<br></br><br></br>
                            </div>
                            : 

                            <div className="information">
                                <label>Employee Id:</label>&nbsp;
                                <br></br><br></br>
                                <label>Employee Name:</label>&nbsp;
                                <br></br><br></br>
                                <label>Employee Role:</label>&nbsp;
                                <br></br><br></br>
                                <label>Reports To:</label>&nbsp;
                               <br></br><br></br>
                               {
                                noData ? <div className="textcolor">No Employee found with given ID</div> : ''
                               }
                            </div>

                            :
                            empDetails.length?
                            <div className="information">
                                <label>Employee Id:</label>&nbsp;
                                {editemp.Id}<br></br><br></br>
                                <label>Employee Name:</label>&nbsp;
                                <input text='string' value={editemp.Name} onChange={editDetails} name='Name'/><br></br><br></br>
                                <label>Employee Role:</label>&nbsp;
                                <input text='string' value={editemp.Role} onChange={editDetails} name='Role'/><br></br><br></br>
                                <label>Reports:</label>&nbsp;
                                <input text='string' value={editemp.Mname} onChange={editDetails} name='Mname'/><br></br><br></br>
                            </div>
                            :
                            <div className="information">
                                <label>Employee Id:</label>&nbsp;
                                <br></br><br></br>
                                <label>Employee Name:</label>&nbsp;
                                <input/><br></br><br></br>
                                <label>Employee Role:</label>&nbsp;
                                <input/><br></br><br></br>
                                <label>Reports To:</label>&nbsp;
                                <input/><br></br><br></br>
                               {
                                noData ? <div className="textcolor">No Employee found with given ID</div> : ''
                               }
                            </div>
                    }
                    </div>
            </div>
        </div>
    )
}

export default EmpDetailsCard;