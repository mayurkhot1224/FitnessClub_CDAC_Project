import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import Logout from '../../screens/common/Logout';
 import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation} from "react-router";

const AllPackages = () => {
    const history=useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  
  const location = useLocation();
  const branchData = location.state.branchId;
    const [packages, setPackage] = useState([]);
    const loginStatus = sessionStorage.getItem('LoginStatus');
    if( loginStatus != 1){
        alert('please signin first!!')
        history.push('/login')
      }

    useEffect(() => {
        console.log("User component is mounted");
        getPackage();
    
    } , []);

    const getPackage = () => {
        axios.get(url+"/packages/branch/"+branchData).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setPackage(result.response);
            }else{
                alert("packages not found");
            }
        });
    }

    return(
        <div className="privacydiv">
            <Logout/>
            {/* <Link to="/addpackage" className="btn btn-warning"> Add Package </Link> */}
            <button className="btn btn-warning"
        onClick={()=>{history.push('/packageadd',{branchId:isSignin.user.branch.id})}}> Add Packages
        </button>
            <h1 align="center">All Packages</h1> 
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Price</th>                        
                        
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        packages.length >= 1 ? packages.map(packag => {
                            return(
                                <tr key={packag.id}>
                                    <td>{packag.id}</td>
                                    <td>{packag.packageName}</td>
                                    <td>{packag.description}</td>
                                    <td>{packag.price}</td>                              
                                   
                                
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  
            <Link to="/localadminpage">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
        </div>
    )
}


export default AllPackages;