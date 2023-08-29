import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
//import $ from "jquery";
 import { Link } from "react-router-dom";
 import Logout from '../../screens/common/Logout';
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const AllTrainers = () => {
    const [trainers, setTrainer] = useState([]);
    const history = useHistory();
    const loginStatus = sessionStorage.getItem('LoginStatus');
    if( loginStatus != 1){
        alert('please signin first!!')
        history.push('/login')
      }

    useEffect(() => {
        console.log("User component is mounted");
        getTrainer();
    
    } , []);

    const getTrainer = () => {
        axios.get(url+"/users/trainers").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setTrainer(result.response);
            }else{
                alert("users not found");
            }
        });
    }

    const deleteTrainer = (trainer) => {
        console.log(trainer.id);
        axios.delete(url+"/users/delete/"+trainer.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getTrainer();
            }else{
                alert("error while user deletion"); 
            }
        })
    }


    return(
        <div className="privacydiv">
            <Logout/>

            {/* <Link to="/addtrainer"> <a className="btn btn-warning" href=" ">Add Trainer</a> </Link> */}
            <h1 align="center">All Trainers</h1> 

           

            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                        {/* <th>password</th> */}
                        <th>Phone No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        trainers.length >= 1 ? trainers.map(trainer => {
                            return(
                                <tr key={trainer.id}>
                                    <td>{trainer.id}</td>
                                    <td>{trainer.firstName}</td>
                                    <td>{trainer.lastName}</td>
                                    <td>{trainer.email}</td>                                
                                    <td>{trainer.phone}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteTrainer(trainer)}}>
                                           Delete
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


export default AllTrainers;