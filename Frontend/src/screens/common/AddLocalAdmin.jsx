import React from "react";

import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logout from '../../screens/common/Logout';


const AddAdmin = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userBranchId, setUserBranchId] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const history = useHistory();

  const addAdmin = () => {
    if (email === "" || password === "" || firstName === "" || lastName === "" || phoneNo === "") {
      alert("fields cannot be left empty");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dob: dob,
        phoneNo: phoneNo,
        address: address,
        role: "MANAGER"
      };
      console.log(data);


      axios.post(url + "/manager/add/" + userBranchId, data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("successfully registered");
          history.push("/alllocaladmins");
        } else {
          alert("email already exist");
        }
      });


    }
  };

  return (

    <div className="privacydiv">
      <Logout />



      <div className="form-group row">
        <label for="email5" className="col-sm-2 col-form-label" align='middle'>
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
        <label for="email5" className="col-sm-2 col-form-label" align='middle'>
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
        <label for="email5" className="col-sm-2 col-form-label" align='middle'>
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
        <label for="password5" className="col-sm-2 col-form-label" align='middle'>
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
        <label
          for="email5"
          className="col-sm-2 col-form-label"
          align="middle">
          Date Of Birth
        </label>
        <div className="col-sm-3">
          <input
            type="date"
            className="form-control"
            id="fname"
            placeholder="Batch Time"
            onChange={(event) => {
              setDOB(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="email5" className="col-sm-2 col-form-label" align='middle'>
          Address
        </label>
        <div className="col-sm-8">
          <input
            type="email"
            className="form-control"
            id="email5"
            placeholder="Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            required
          />
        </div>
      </div>


      <div className="form-group row">
        <label for="phone5" className="col-sm-2 " align='middle'>
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
        <label for="role5" className="col-sm-2 " align='middle'>
          Role
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="role"
            disabled
            value="MANAGER"
            onChange={(event) => setRole(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="password5" className="col-sm-2 " align='middle'>
          Branch Id
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="cnfpass"
            placeholder="Branch Id"
            onChange={(event) => {
              setUserBranchId(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div>
        <div className="col-sm-12 text-center">
          <button className="btn btn-primary" onClick={addAdmin}>
            Add Admin
          </button>&nbsp;&nbsp;
          <Link to="/alllocaladmins" className="btn btn-info" align="right"> Back </Link>
        </div>

      </div>
    </div>
  );
};
export default AddAdmin;
