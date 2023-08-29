import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
//import $ from "jquery";
import Logout from '../../screens/common/Logout';
  import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { useSelector } from "react-redux";

const AllMembers = () => {
    const [members, setMember] = useState([]);
   // const history = useHistory();

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
        axios.get(url+"/member/members").then((response) => {
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
        axios.delete(url+"/member/delete/member/"+member.id).then((response) => {
            const result = response.data;
            if(result.status === "OK"){
                getMember();
            }else{
                alert("error while user deletion");
            }
        })
    }


    return(
        <div className="privacydiv">
             <Logout/>
             {/* <Link to="/register" className="btn btn-warning"> Add Member </Link> */}
            <h1 align="center">All Members</h1> 
            
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>Phone No.</th>
                        {/* <th>Branch</th> */}
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
                                    <td>{member.phoneNo}</td>
                                    {/* <td>{member.branch}</td> */}
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteMember(member)}}>
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


export default AllMembers;