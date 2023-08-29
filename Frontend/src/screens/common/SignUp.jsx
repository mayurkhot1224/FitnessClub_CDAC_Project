import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom";

const SignUp = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();
 

  const addUser = () => {
    if (firstName === "" || lastName === "" || email === "" || password === "" || address === "" || dob === "" ||phone === "" ) {
      alert("fields cannot be empty");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob:dob,
        phoneNo: phone,
        address:address,
        password: password,
        role:"MEMBER"
      };
      console.log(data);

      axios.post(url+"/member/add/", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("successfully registered");
          history.push("/login");
        } else {
          alert("email already exist");
        }
      });

      
    }
  };

  return (
   
    <div className="privacydiv">
       <Navbar />
     
      <div className="form-group row">
        <label for="email5" className="col-sm-2 col-form-label" align="middle">
          First Name
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="First Name"
            onChange={(event) => {
              setFname(event.target.value);
            }}
            required
          />
        </div>
        <label for="email5" className="col-sm-2 col-form-label" align="middle">
          Last Name
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="last Name"
            onChange={(event) => {
              setLname(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="email5" className="col-sm-2 col-form-label" align="middle">
          DOB
        </label>
        <div className="col-sm-8">
          <input
            type="date"
            className="form-control"
            id="email5"
            placeholder="Date Of birth"
            onChange={(event) => {
              setDob(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="email5" className="col-sm-2 col-form-label" align="middle">
          Email
        </label>
        <div className="col-sm-8">
          <input
            type="email"
            className="form-control"
            id="email5"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="password5" className="col-sm-2 col-form-label" align="middle">
          Password
        </label>
        <div className="col-sm-8">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="password5" className="col-sm-2 col-form-label" align="middle">
          Address
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="phone5" className="col-sm-2 " align="middle">
          Contact Number
        </label>
        <div className="col-sm-8">
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="phone number"
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="role5" className="col-sm-2 " align="middle">
          Role
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="role"
            disabled
            value="MEMBER"
            onChange={(event) => setRole(event.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <div className="col-sm-12 text-center">
          <button className="btn btn-primary" onClick={addUser}>
            Register
          </button>
          <Link to="/login">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
