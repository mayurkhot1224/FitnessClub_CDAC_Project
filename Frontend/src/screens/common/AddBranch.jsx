import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';


const AddBranch = () => {
  const [branchName, setBranch] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNo, setPhone] = useState("");
  const history = useHistory();

  const addBranch = () => {
    if (branchName === "") {
      alert("branchname cant be left empty");
    } else {
      let data = {
        branchName: branchName,
        locality: locality,
        city: city,
        state: state,
        zipCode: zipCode,
        phoneNo: phoneNo,
        // role:role
      };
      console.log(data);
      // SENDS DATA TO THE API

      axios.post(url + "/branch/add", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("successfully registered");
          history.push("/allbranches");
        } else {
          alert("email already exist");
        }
      });


    }
  };

  return (

    <div className="privacydiv">

      <Logout />
      <div className="col-sm-12">
        <div className="form-group row">
          <label for="email5" className="col-sm-2 col-form-label" align="middle">
            Branch Name
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="fname"
              value={branchName}
              placeholder="Branch Name"
              onChange={(event) => {
                setBranch(event.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <label for="locality5" className="col-sm-2 col-form-label" align="middle">
            Locality
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="locality"
              value={locality}
              placeholder="Locality"
              onChange={(event) => {
                setLocality(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="city5" className="col-sm-2 col-form-label" align="middle">
            City
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              placeholder="City"
              onChange={(event) => {
                setCity(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="state5" className="col-sm-2 col-form-label" align="middle">
            State
          </label>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              id="state"
              value={state}
              placeholder="State"
              onChange={(event) => {
                setState(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="zipCode5" className="col-sm-2 col-form-label" align="middle">
            Zipcode
          </label>
          <div className="col-sm-3">
            <input
              type="number"
              className="form-control"
              id="zipCode"
              value={zipCode}
              placeholder="Zipcode"
              onChange={(event) => {
                setZipCode(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="phone5" className="col-sm-2" align="middle">
            Contact Number
          </label>
          <div className="col-sm-3">
            <input
              type="number"
              className="form-control"
              id="phone"
              value={phoneNo}
              placeholder="phone number"
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-8 offset-sm-2">
            <div className="form-check">
              {/* <input className="form-check-input" type="checkbox" id="check5" /> */}
              {/* <label className="form-check-label" for="check5">
              By clicking register you agree with the terms and conditions.
            </label> */}
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-7 text-center">
            <button className="btn btn-primary" onClick={addBranch}>
              Add Branch
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
export default AddBranch;
