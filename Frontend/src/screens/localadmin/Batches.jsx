import React from "react";
// import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
//import $ from "jquery";
import Logout from '../../screens/common/Logout';
 import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//import { useSelector } from "react-redux";

const AllBatches = () => {
    const [batches, setBatch] = useState([]);
    const history = useHistory();
    const loginStatus = sessionStorage.getItem('LoginStatus');
    if( loginStatus != 1){
        alert('please signin first!!')
        history.push('/login')
      }

    useEffect(() => {
        console.log("branch component is mounted");
        getBatch();
    
    } , []);

    const getBatch = () => {
        axios.get(url+"/batches/batch").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setBatch(result.response);
            }else{
                alert("batches not found");
            }
        });
    }

    const deleteBatch = (batch) => {
        console.log(batch.id);
        axios.delete(url+"/batches/delete/"+batch.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getBatch();
            }else{
                alert("error while batch deletion");
            }
        })
    }
     
    // const updateBatch = (batch) => {
    //     console.log(batch.id);
    //     axios.put(url+"/batches/update").then((response) => {
    //         const result = response.data;
    //         if(result.status === "OK"){
    //             getBatch();
    //         }else{
    //             alert("error while updating batch");
    //         }
    //     })
    // }

    return(
        <div className="privacydiv">
             <Logout/>

             <Link to="/addbatch"> <a className="btn btn-warning" href=" ">Add Batch</a> </Link>
            <h1 align="center">All Batches</h1> 
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>Batch Time</th>
                        <th>Batch Type</th>                                          
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        batches.length >= 1 ? batches.map(batch => {
                            return(
                                <tr key={batch.id}>
                                    <td>{batch.id}</td>
                                    <td>{batch.batchTime}</td>
                                    <td>{batch.batchType}</td>                                   
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteBatch(batches)}}>
                                           Delete
                                        </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button type="button" class="btn btn-light" onClick={()=>{
                                 history.push('/updatebatch', {batches:batch})
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
             <Link to="/localadminpage">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
        </div>
    )
}


export default AllBatches;