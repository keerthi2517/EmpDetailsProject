import React from "react";
//import axios from 'axios';
//import UxDataGrid from 'ux-data-grid/components/UxDataGrid';
import GridComp from './GridComp';
function DetailsDisplay(){
    return(
        <div>
            <GridComp/>
        </div>
    )
}

// function DetailsDisplay(){
//     const [columnDefs,setcolumnDefs] = useState([
//           {
//             field: 'Id',
//             headerName: 'ID',
//           },
//           {
//             field: 'Name',
//             headerName: 'Name',
//           },
//           {
//             field: 'Role',
//             headerName: 'Role',
//           },
//           {
//             field: 'Mname',
//             headerName: 'Manager',
//           }
//     ])
//     useEffect(()=>{
//         const url = 'https://localhost:44348/api/Emp'
//         axios.get(url)
//        .then(response =>{
//         console.log(response)
//        })
//     })
//     return(
//         <div>
//             <UxDataGrid {...columnDefs}/>
//         </div>
//     )
// }

export default DetailsDisplay;
