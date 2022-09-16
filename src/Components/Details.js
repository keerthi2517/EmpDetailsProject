import React, { useEffect } from "react";
import axios from 'axios';
function Details(){
    useEffect(()=>{
        const url = 'https://localhost:44321/api/emp'
        axios.get(url, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
        })
       .then(response =>{
        console.log(response)
       })
    },[])
    return(
        <div>
            <h3>Details</h3>
        </div>
    )
}

export default Details;