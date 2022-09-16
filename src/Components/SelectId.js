import axios from "axios";
import React,{useEffect,useState}from "react";  
import '../css/selectid.css'
function SelectId(props){
    const [empids,setempids] = useState([]);
    const [selectedId,setselectedId] = useState(0);
    useEffect(()=>{
        const url = 'api/emp';
      const headers = {
        'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
      }
      axios.get(url,headers)
      .then(response=>{
        console.log(`response.data is :`);
        console.log(response.data);
		let tempIDs = [];
        response.data.forEach(element => {
		   tempIDs.push(element.Id);
        });
		setempids(tempIDs);
      })
      //eslint-disable-next-line 
    },[])
    const updateSelectedId = e=>{
        setselectedId(e.target.value);
        props.childToParent(e.target.value);
    }
    return(
        <div>
            <select className="select" onChange={updateSelectedId}>
                {
                    empids.map((empid)=>
                        <option key={empid} value={empid}>{empid}</option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectId;