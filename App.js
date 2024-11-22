import logo from './logo.svg';
import './App.css';
import ListEmployeeComp from './Component/ListEmployeeComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeadComp } from './Component/HeadComp';
import { FooterComp } from './Component/FooterComp';
import CreateEmpComp from './Component/CreateEmpComp';
import UpdateEmployeeComp from './Component/UpdateEmployeeComp';

function App() {
  return (
   <div>
    <BrowserRouter>
      <HeadComp></HeadComp>
      <Routes>
      <Route path='/' element={<ListEmployeeComp></ListEmployeeComp>}></Route>
      <Route path='/employees' element={ <ListEmployeeComp/>}></Route>
      <Route path='/add-employee' element={<CreateEmpComp/>}></Route>
      <Route path='/edit-employee/:id' element={<UpdateEmployeeComp/>}></Route>
      
      
      </Routes>
      <FooterComp></FooterComp>
      </BrowserRouter>
    </div>
  );
}

export default App;
