import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
//import $ from "jquery";
import Logout from '../../screens/common/Logout';
  import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const AllMembers = () => {
    const [members, setMember] = useState([]);
    const history = useHistory();
    const user = useSelector((state) => state.isSignin);
 console.log(user)
    //const isLogIn = useSelector((state) => state.isSignin);

    // if(isLogIn.status === false){
    //     alert('please signin first!!')
    //     history.push('/signin')
    //   }

    useEffect(() => {
        console.log("User component is mounted");
        getMember();
    
    } , []);

    const getMember = () => {
        axios.post(url+"/users/branchmembers/"+user.user.branch.id).then((response) => { 
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setMember(result.response);
            }else{
                alert("users not found"); 
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

    // $(document).ready(function(){
    //     $("#myInput").on("keyup", function() {
    //       var value = $(this).val().toLowerCase();
    //       $("#myTable tr").filter(function() {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //       });
    //     });
    //   });

    return(
        <div className="privacydiv">
             <Logout/>
             <Link to="/register" className="btn btn-warning"> Add Member </Link>
            <h1 align="center">My Members</h1> 
            
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                        {/* <th>password</th> */}
                        <th>Phone No.</th>
                        {/* <th>Branch</th>
                        <th>Batch</th> */}
                        <th>Action</th>
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
                                    <td>{member.phone}</td>
                                    {/* <td>{member.userBranchId}</td>
                                    <td>{member.userBatchId}</td> */}
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteMember(member)}}>
                                           Delete
                                        </button>&nbsp;&nbsp;
                                        <button type="button" class="btn btn-light" onClick = {()=>{
                                 history.push('/updatemembers', {members:member})
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


export default AllMembers;