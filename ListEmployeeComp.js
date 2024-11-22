import React from "react"
import {useState,useEffect} from "react"
import { deleteEmployee, getEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

import { createEmployee } from "../services/EmployeeService";



function ListEmployeeComp()
{
    const[employees,setEmployees]=useState(
        [
            {id:123,firstName:"Prachi",lastName:"Kadam",email:"prachi@gmail.com"},
            {id:323,firstName:"nikita",lastName:"jadhav",email:"nikki@gmail.com"}
          
        ]
    );



    useEffect(()=>{
        getAllEmployees();
    },[]);
    const getAllEmployees=()=>{
        getEmployee()
        .then((response)=>{
            console.log(response.data);
            setEmployees(response.data);
        }).catch(error=>{
            console.log(error)
        });
    };
    const nav= useNavigate();
   const addNewEmployee = () =>{
    nav('/add-employee');
   }
   const updateEmployee=(id)=>{
    nav(`/edit-employee/${id}`);
   }

   const RemoveEmployee=(id)=>{
    console.log(id);
    deleteEmployee(id).then((res)=>{
        getAllEmployees();

    }).catch((error)=>{
        console.log(error);
    })
   }
    return(
        <div className="container">
         <h2>List of All Employee</h2>
         <button className="btn btn-primary mb=2" onClick={addNewEmployee}>Add Employee</button>
         <table className="table table-striped table-bordered">
     
             <thead>
                 <tr>
                     <th>Emp id</th>
                     <th>Emp First Name</th>
                     <th>Emp Last Name</th>
                     <th>Email</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     employees.map(emp=>
                         
                         <tr key={emp.id}>
                             <td>{emp.id}</td>
                             <td>{emp.firstName}</td>
                             <td>{emp.lastName}</td>
                             <td>{emp.email}</td>
                             <td>
                                <button className="btn btn-info" onClick={()=>updateEmployee(emp.id)}>update</button>
                                <button className="btn btn-danger" onClick={()=>RemoveEmployee(emp.id)}>delete</button>
                             </td>
                         </tr>
                         )
                 }
             </tbody>
         </table>
     
     
        </div>
        )
    
    
}
export default ListEmployeeComp;