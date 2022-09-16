

//this is a component which is used in the EmpList page for displaying all the emp data in table format.

import React, { useEffect, useState } from "react";
import '../css/tablecomp.css';
import axios from 'axios';
function TableComp(){
    const [empList,setempList] = useState([]);
    const fetchingAllEmp = ()=>{
        const url = 'api/emp'
        axios.get(url, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
        })
       .then(response =>{
        console.log(response.data)
        let tempData = [];
        tempData.push(response.data);
        console.log(tempData);
        setempList(tempData[0]);
       })
       .catch(e=>{
        console.log(e);
       })
    }
    useEffect(()=>{
        fetchingAllEmp();
    },[]);
    return(
        <div>
            <div className="tableFixHead">
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Role</th>
                        <th>Employee Manager</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     empList.length?
                     empList.map(emp =>
                     <tr key={emp.Id}>
                        <td>{emp.Id}</td>
                        <td>{emp.Name}</td>
                        <td>{emp.Role}</td>
                        <td>{emp.Mname}</td>
                     </tr>)
                     :
                     <tr>
                        <td>no data</td>
                        <td>no data</td>
                        <td>no data</td>
                        <td>no data</td>
                     </tr>
                   }
                </tbody>
            </table>
        </div>
        </div>

    )
}

export default TableComp;