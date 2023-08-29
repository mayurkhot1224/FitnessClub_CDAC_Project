import React from 'react'
import { Link } from "react-router-dom";
import Logout from "../../screens/common/Logout";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { url } from "../../common/constant";
import { useState,useEffect } from "react";
import { useLocation} from "react-router";

const  BranchPage=()=> {


  const history=useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  
  const location = useLocation();
  const branchData = location.state.branch

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log(isSignin.user);



  const [members, setMember] = useState([]);
  const [trainers, setTrainer] = useState([]);
  const [batches, setBatch] = useState([]);
   

    useEffect(() => {
        console.log("User component is mounted");
        getMember();
        getTrainer();
         getBatch();
    
    } , []);



    const getMember = () => {

      let data ={
        role:"MEMBER"
      }
        axios.post(url+"/manager/members/"+branchData.id,data).then((response) => {

            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setMember(result.response);
            }else{
                alert("members not found");
            }
        });
    }

    
    const getTrainer = () => {

      let data ={
        role:"TRAINER"
      }
        axios.post(url+"/manager/trainers/"+branchData.id,data).then((response) => {

            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setTrainer(result.response);
            }else{
                alert("trainers not found");
            }
        });
    }
    const getBatch = () => {

     
        axios.get(url+"/batches/batchesbyid/"+branchData.id).then((response) => {

            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setBatch(result.response);
            }else{
                alert("batches not found");
            }
        });
    }


  return (
    <div className="privacydiv">
       
       <div className="privacydiv">
             <Logout/> 
             
             <h1 align="center" >{branchData.branchName} Page </h1> 
             <hr/>
             <hr/>

            <h1 align="center">All Members </h1> 
            
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                       
                        <th>Phone No.</th>
                        
                        
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        members.length >= 1 ? members.map(member => {
                            return(
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>{member.firstName}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.email}</td>                                
                                    <td>{member.phoneNo}</td>
                                    
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  



            <hr/>
            <hr/>
            <h1 align="center">All Trainers</h1> 

            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                        <th>Phone No.</th>
                        
                        
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
                                    <td>{trainer.phoneNo}</td>
                                    
                                    
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  

            <hr/>
            <hr/>

            <h1 align="center">All Batches</h1> 
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>Batch Time</th>
                        <th>Batch Type</th>                                          
                        {/* <th>Action</th> */}
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
                                    
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table> 
            <hr/>
        <hr/>
        <hr/>
            <div >
             <Link to="/allbranches" className="btn btn-info" align="right"> Back </Link>
             </div>
        </div>
       

    </div>
  )
}
export default BranchPage;