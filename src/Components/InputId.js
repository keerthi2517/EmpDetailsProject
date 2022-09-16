
import React,{useState} from "react";
import '../css/inputid.css';
function InputId(props){
    const [id,setid] = useState('');
    const assignId = e=>{
        setid(e.target.value)
        //props.infoFromchild(e.target.value);
    }
    const sendId = () =>{
        if(id){
            props.infoFromchild(id);
        }
        else{
            console.log(`the id value is ${id}`);
        }
    }
    return(
        <div>
            <div className="select">
                <input type="number" value={id} placeholder="Enter employee ID"onChange={assignId}></input><br></br><br></br>
                <button className="button" type="submit" onClick={sendId}>Fetch</button>
            </div>&nbsp;
        </div>
        
    )
}


export default InputId
