import React from "react";
import '../css/topbar.css'
import {NavLink} from 'react-router-dom';
function Topbar(){
    return(
        <div className="tab">
            <nav>
                <NavLink to='/addemp'><button>Add Emp</button></NavLink>
                <NavLink to='/empupdate'><button>Update</button></NavLink>
                <NavLink to='/empdelete'><button>Delete</button></NavLink>
            </nav>
        </div>
    )
}

export default Topbar;