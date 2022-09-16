import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../css/addemp.css';
import axios from 'axios';
function AddEmp(){
    const metadata = ["Id", "Name","Role","Mname"];
    const navigate = useNavigate();
    const buttonStyle = {
        backgroundColor : "#5bc1fc",
        marginLeft : "650px",
        marginTop: "90px"
    }
    const [emp,setEmp] = useState({
      //Id:null,
      Name:'',
      Role:'',
      Mname:''})
    const gettingDetails = e =>{
         setEmp({...emp,
            [e.target.name]:e.target.value
         })
         console.log(`the received value is :${e.target.value}`);
         console.log(emp);
    }
    const sendDetails = e =>{
     // e.preventDefault()
      const url = `api/emp`;
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': true
      }
      console.log(emp)
       axios.post(url,emp,{"headers": headers})
       .then(response =>{
           console.log(response)
       })
      .catch(error =>{
           console.log(error)
           console.log(error.config);    
      })
    }
   
    const options = [
        {
          id:1,
          label: "SD",
        },
        {
          id:2,
          label: "SDD",
        },
        {
          id:3,
          label: "SL",
        },
        {
          id:4,
          label: "QA"
        },
        {
          id:5,
          label: "SQA"
        }
      ];
    return(
        <div>
            <center className="centering">
           <form onSubmit={sendDetails}>
                <center><h3 className="heading">New Employee Details</h3></center>
                <label>Enter Name:  <input type='text' name={metadata[1]} value={emp.Name} onChange={gettingDetails}></input></label><br></br><br></br>
                <label>Enter Role: &nbsp;&nbsp;&nbsp;  
                    <select className="button"onChange={gettingDetails} name={metadata[2]} value={emp.Role}>
                    {options.map((option) => (
                    <option key={option.id}>{option.label}</option>
                        ))}
                    </select>
                </label><br></br><br></br>
                <label>Enter Manager:  <input type='text'name={metadata[3]} value={emp.Mname} onChange={gettingDetails}></input></label><br></br><br></br>
                <center>
                  <button className="button" type="submit">Create Emp</button>&nbsp;&nbsp;
                  <button className="button" type="reset">Reset</button>
                  </center>
            </form>
            </center>
            <button onClick={()=>navigate('/')} style={buttonStyle}>Back To empList</button>
        </div>
    )
}

export default AddEmp;