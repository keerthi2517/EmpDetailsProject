
import './App.css';
import EmpList from './Components/EmpList';
import EmpDelete from './Components/EmpDelete';
import EmpUpdate from './Components/EmpUpdate';
//import EmpDetailsCard from './Components/EmpDetailsCard';
//import DetailsDisplay from './Components/DetailsDisplay';
//import Details from './Components/Details';
import AddEmp from './Components/AddEmp';
//import SelectId from './Components/SelectId';
//import DelEmp from './Components/DelEmp';
//import InputId from './Components/InputId';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<EmpList/>}></Route>
        <Route path='addemp' element={<AddEmp/>}/>
        <Route path ='empdelete' element={<EmpDelete/>}/>
        <Route path = 'empupdate' element={<EmpUpdate/>}/>
       </Routes>
    </div>
  );
}

export default App;
