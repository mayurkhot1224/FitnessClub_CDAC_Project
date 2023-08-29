import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import React from 'react'
import Logout from "../../screens/common/Logout";
import axios from 'axios';
import { url } from "../../common/constant";
import { useState,useEffect } from "react";
import { useLocation} from "react-router";



const Report = () =>{

    const history=useHistory();
  const isSignin = useSelector((state) => state.isSignin);
  
  const location = useLocation();
  const TrainerData = location.state.trainerId;
  console.log(isSignin.user);

  const [members, setMember] = useState([]);

  useEffect(() => {
    console.log("User component is mounted");
  //  setBranchId(branch.id);
    getMember();

} , []);

const getMember = () => {

      axios.get(url+"/member/trainmembers/"+TrainerData).then((response) => {

          const result = response.data;
          console.log(result);
          if (result.status === "OK" ) {
              setMember(result.response);
          }else{
              alert("members not found");
          }
      });
  }

  return (
    <div className="privacydiv"> 
       
       <div className="privacydiv">
             <Logout/>

            
             
             <h1 align="center" >MY MEMBERS </h1> 
             <hr/>
             <hr/>
            
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                        <th>Phone No.</th> 
                        <th>Report</th>     
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
                                    <td>
                                    <button type="button" class="btn btn-danger" onClick = {()=>{
                                 history.push('/updateReport', {member:member})
                                }}>
                                           ViewReport
                                        </button>
                                    </td>   
                                    
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  

            <div >
             <Link to="/trainerpage" className="btn btn-info" align="right"> Back </Link>
             </div>
        </div>
       

    </div>
  )

}
export default Report;