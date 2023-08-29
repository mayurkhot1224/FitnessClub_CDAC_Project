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
  const branchData = location.state.branchId;
  const loginStatus = sessionStorage.getItem('LoginStatus');
  if( loginStatus != 1){
    alert('please signin first!!')
    history.push('/login')
  }

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log(isSignin.user);

  const [members, setMember] = useState([]);
  const [trainers, setTrainer] = useState([]);
  const [batches, setBatch] = useState([]);
   

    useEffect(() => {
        console.log("User component is mounted");
      //  setBranchId(branch.id);
        getMember();
        getTrainer();
         getBatch();
    
    } , []);



    const getMember = () => {

      let data ={
        role:"MEMBER"
      }
        axios.post(url+"/manager/members/"+branchData,data).then((response) => {

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
        axios.post(url+"/manager/trainers/"+branchData,data).then((response) => {

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

     
        axios.get(url+"/batches/batchesbyid/"+branchData).then((response) => {

            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setBatch(result.response);
            }else{
                alert("batches not found");
            }
        });
    }
    
    const deleteMember = (member) => {
        console.log(member.id);
        axios.delete(url+"/users/delete/"+member.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getMember();
            }else{
                alert("error while user deletion");
            }
        })
    }
    const deleteTrainer = (trainer) => {
        console.log(trainer.id);
        axios.delete(url+"/trainer/delete/trainer/"+trainer.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getTrainer();
            }else{
                alert("error while user deletion");
            }
        })
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


  return (
    <div className="privacydiv"> 
       
       <div className="privacydiv">
             <Logout/>
             {/* <Link to="/register" className="btn btn-warning"> Add Member </Link> */}

            
             
             <h1 align="center" >Branch Page </h1> 
             <hr/>
             <hr/>

             {/* <Link to="/register" className="btn btn-warning"> Add Member </Link> */}

             <Link to="/addtrainer"> <a className="btn btn-warning" href=" ">Add Trainer</a> </Link>

            <Link to="/addbatch"> <a className="btn btn-warning" href=" ">Add Batch</a> </Link>

            <h1 align="center">All Members </h1> 
            
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                        <th>Phone No.</th>
                        {/* <th>Action</th> */}
                        
                        
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
                                    {/* <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteMember(member)}}>
                                           Delete
                                        </button>&nbsp;&nbsp;
                                        <button type="button" class="btn btn-light" onClick = {()=>{
                                 history.push('/updatemembers', {members:member})
                                }}>
                                           Edit
                                        </button>
                                        </td> */}
                                   
                                    
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
                                    <td>{trainer.phoneNo}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteTrainer(trainer)}}>
                                           Delete
                                        </button>&nbsp;&nbsp;
                                        {/* <button type="button" class="btn btn-light" onClick = {()=>{
                                 history.push('/updatetrainer', {trainers:trainer})
                                }}>
                                           Edit
                                        </button> */}
                                        </td>
                                    
                                    
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
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteBatch(batch)}}>
                                           Delete
                                        </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button type="button" class="btn btn-light" onClick={()=>{
                                 history.push('/updatebatch', {batchess:batch})
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
            <hr/>
        <hr/>
        <hr/>
            <div >
             <Link to="/localadminpage" className="btn btn-info" align="right"> Back </Link>
             </div>
        </div>
       

    </div>
  )
}
export default BranchPage;