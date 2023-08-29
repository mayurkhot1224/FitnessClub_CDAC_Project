import React from "react";
//import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
//import $ from "jquery";
import Logout from '../../screens/common/Logout';
 import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { useSelector } from "react-redux";

const AllPackages = () => {
    const [packages, setPackage] = useState([]);
   // const history = useHistory();

    //const isLogIn = useSelector((state) => state.isSignin);

    // if(isLogIn.status === false){
    //     alert('please signin first!!')
    //     history.push('/signin')
    //   }

    useEffect(() => {
        console.log("User component is mounted");
        getPackage();
    
    } , []);

    const getPackage = () => {
        axios.get(url+"/packages/package").then((response) => {
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
                                    <td>{packag.packageDescription}</td>
                                    <td>{packag.packagePrice}</td>                              
                                   
                                
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  
            <Link to="/memberpage">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
        </div>
    )
}


export default AllPackages;