//import { url } from "../../common/constant";
//import { LoginAction } from "../actions/LoginAction";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import React from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { url } from "../../common/constant";
 import { useDispatch } from "react-redux";
import { LoginAction } from "../../actions/LoginAction";




const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()  
  const dispatch = useDispatch()  

const UserLogin = () => { 
  if (email.length === 0) {
    alert('please enter email')
  } else if (password.length === 0) {
    alert('please enter password')
  } else {
    let data = {
      email:email,
      password:password
     };
    console.log(data);
    //send user info to the API
    axios.post(url+"/users/signin", data).then((response) => {
      const result = response.data;
      dispatch(LoginAction(result.response));
      if (result.status === "OK" && result.role === "ADMIN") {
        sessionStorage.setItem('LoginStatus',1);
        
        Swal.fire({
          icon: 'success',
          title: 'LoginAs '+email+' Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/adminpage')
        
      } 
      
      else if (result.status === "OK" && result.role === "MANAGER") {
        sessionStorage.setItem('LoginStatus',1);
        Swal.fire({
          icon: 'success',
          title: 'LoginAs '+email+' Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/localadminpage')
      }

      else if (result.status === "OK" && result.role === "TRAINER") {
        sessionStorage.setItem('LoginStatus',1);
        Swal.fire({
          icon: 'success',
          title: 'LoginAs '+email+' Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/trainerpage')
      }

      else if (result.status === "OK" && result.role === "MEMBER") {
        sessionStorage.setItem('LoginStatus',1);
        Swal.fire({
          icon: 'success',
          title: 'LoginAs '+email+' Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/memberpage')
      }

      else if(result.status !== "OK" ){
        
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        text1: 'Email or Password Incorrect!',
        footer: '<a href="/admin/signin">Why do I have this issue?</a>'
      })

      }
    });
  }
}

  return (
    <div className="privacydiv">
       <Navbar/> 
       <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        <div class="form-group row">
          <label for="email5" class="col-sm-4 col-form-label" align="right">
            Email
          </label>
          
          <div class="col-sm-4">
            <input

              type="email"
              class="form-control"
              placeholder="Email"
              onChange={(event) => {setEmail(event.target.value)}}
            />
          </div>
         
        </div>
        <hr/><hr/><hr/><hr/><hr/>
        <div class="form-group row">
          <label for="password5" class="col-sm-4 col-form-label" align="right">
            Password
          </label>
          <div class="col-sm-4">
            <input
             
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(event) => {setPassword(event.target.value)}}
            />
          </div>
        </div>
        <hr/><hr/><hr/><hr/><hr/>
        <div >
          <div class="col-sm-16 text-center">
            <button  type="button" class="btn btn-primary" onClick={UserLogin}>
              Sign in 
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/register" className="btn btn-success"> SignUp </Link> 
          </div>
        </div>
      
    </div>
  );
};

export default SignIn;
