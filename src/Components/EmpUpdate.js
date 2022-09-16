import React,{useState,useEffect} from "react";
import InputId from "./InputId";
import EmpDetailsCard from "./EmpDetailsCard";
import ButtonComp from "./ButtonComp";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function EmpUpdate(){
    const navigate = useNavigate();
    const buttonStyle = {
        backgroundColor : "#5bc1fc",
        marginLeft : "650px",
        marginTop: "90px"
    }
    const [gettingId,setgettingid] = useState(null);
    const [details,setdetails] = useState(undefined);
    // const getDetailsFromChildComp = (editemp)=>{                         //this method is for getting information of the emp if edited from the empdetailscard comp
    //     // console.log('info from child in the parent is');
    //     // console.log(editemp);
    //     setdetails(editemp);
    //     console.log('details received are:')
    //      console.log(details);
    // }
    const infoFromchild = (idvalue) =>{   //sending this method as props to inputid comp to get the selected id value.
        setgettingid(idvalue);            //assigning the id value to gettingId state variable.
                                          //gettingId variable is now sent as a prop to empdetailscard comp to fetch the data of emp
    } 
    const updateEmp = () =>{
        const url = `api/emp/${gettingId}`;
        axios.put(url,details)
        .then(response =>{
            console.log(response)
        })

    }
    return(
        <div>
            <InputId infoFromchild={infoFromchild} />
            {/* getDetailsFromChildComp={getDetailsFromChildComp} */}
            <EmpDetailsCard idfetch={gettingId} notEditable={0} setdetails={setdetails}/>
            <ButtonComp info={'Save Update'} updateEmp={updateEmp} deleteOrupdate={0}/> 
            <button onClick={()=>navigate(-1)} style={buttonStyle}>Back to Emplist</button>
        </div>
    )
    //deleteOrupdate = if this is 1 then delete operation performed if 0 then update operation performed.
}

export default EmpUpdate;