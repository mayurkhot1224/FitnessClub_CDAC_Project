import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { Link } from "react-router-dom";
import { send } from 'emailjs-com';


const AddTrainer = () => {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [userBranchId, setUserBranchId] = useState("");
  const history = useHistory();

  const addTrainer = () => {
    if (firstName === "" || lastName === "" || email === "" || password === "" || phone === "") {
      alert("fields cannot be empty");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        phoneNo: phone,
        address: address,
        password: password,
        role: "TRAINER",
        branch: userBranchId
      };
      console.log(data);
      // SENDS DATA TO THE API

      axios.post(url + "/trainer/add/" + userBranchId, data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("successfully registered");
          //onMail();
          history.push("/localadminpage");
        } else {
          alert("email already exist");
        }
      });


    }
  };


  //   const onMail = () => {

  //     let msg = 'You have been registered sccessfully, please collect your credentails from the gym and you can continue to Workout from tomorrow. Stay Fit with Prime-Fit.!';

  //     let tosend = {
  //             from_name: 'Prime-Fit',
  //             to_name: firstName,
  //             message: msg,
  //             reply_to:email,
  //             }
  //     send(
  //         'service_ja2fqid',
  //         'template_3db9blk',
  //         tosend,
  //          'h9_ri8bNmMdgVfk66'
  //       )
  //         .then((response) => {
  //           console.log('SUCCESS!', response.status, response.text);
  //           alert('Mail Send Sucessfully!!')
  //         })
  //         .catch((err) => {
  //           console.log('FAILED...', err);
  //         });
  // }


  return (

    <div className="privacydiv">
      <Logout />

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
          DOB
        </label>
        <div className="col-sm-8">
          <input
            type="date"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              setDob(event.target.value);
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
        <label for="phone5" className="col-sm-2 " align="middle">
          Branch Id
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Branch Id"
            onChange={(event) => setUserBranchId(event.target.value)}
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
            value="TRAINER"
            onChange={(event) => setRole(event.target.value)}
            required
          />
        </div>
      </div>


      <div>
        <div className="col-sm-12 text-center">
          <button className="btn btn-primary" onClick={addTrainer}>
            Register
          </button>
          <Link to="/localadminpage">
            &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AddTrainer;
