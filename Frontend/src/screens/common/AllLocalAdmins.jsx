import React  from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';
import { useHistory } from "react-router-dom";


const AllLocalAdmins = () => {
    const [admins, setAdmin] = useState([]);
    const history = useHistory();


    useEffect(() => {
        console.log("User component is mounted");
        getAdmin();
    
    } , []);

    const getAdmin = () => {
        axios.get(url+"/manager/managers").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setAdmin(result.response);
            }else{
                alert("users not found");
            }
        });
    }

    const deleteAdmin = (admin) => {
        console.log(admin.id);
        axios.delete(url+"/manager/delete/manager/"+admin.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getAdmin();
            }else{
                alert("error while user deletion");
            }
        })
    }

    return(
        <div className="privacydiv">
             <Logout/>
            
             <Link to="/addlocaladmin" className="btn btn-warning"> Add Local-Admin </Link>
             
            <h1 align="center">All Local-Admins</h1> 
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>                      
                        <th>Phone No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="myTable"> 
                    {
                        admins.length >= 1 ? admins.map(admin => {
                            return(
                                <tr key={admin.id}>
                                    <td>{admin.id}</td>
                                    <td>{admin.firstName}</td>
                                    <td>{admin.lastName}</td>                            
                                    <td>{admin.phoneNo}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteAdmin(admin)}}>
                                           Delete
                                        </button>&nbsp;&nbsp;
                                        <button type="button" class="btn btn-light" onClick={()=>{
                                 history.push('/updatelocaladmin', {admins:admin}) 
                                }}>
                                           Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  
            <div >
             <Link to="/adminpage" className="btn btn-info" align="right"> Back </Link>
             </div>
            
        </div>
    )
}


export default AllLocalAdmins;