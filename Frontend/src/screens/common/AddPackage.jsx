import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';


const AddPackage = () => {
  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPrice] = useState("");
  const [packageDescription, setDescription] = useState("");

  const history = useHistory();

  const addPackage = () => {
    if (packageName === '') {
      alert("package name cannot be empty");
    } else {
      let data = {
        packageName: packageName,
        price: packagePrice,
        description: packageDescription
      };
      console.log(data);
      // SENDS DATA TO THE API

      axios.post(url + "/packages/add", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("package added successfully ");
          history.push("/allpackages");
        } else {
          alert(" package name cannot be blank");
        }
      });


    }
  };

  return (

    <div className="privacydiv">
      <Logout />



      <div className="form-group row">
        <label for="password5" className="col-sm-2 col-form-label" align="middle">
          Package Name
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Package Name"
            onChange={(event) => {
              setPackageName(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="password5" className="col-sm-2 col-form-label" align="middle">
          Price
        </label>
        <div className="col-sm-8">
          <input
            type="number"
            className="form-control"
            id="password"
            placeholder="Price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="email5" className="col-sm-2 col-form-label" align="middle">
          Description
        </label>
        <div className="col-sm-8">
          <input
            type="textarea"
            className="form-control"
            id="email5"
            placeholder="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-8 offset-sm-2">
          <div className="form-check">
            {/* <input className="form-check-input" type="checkbox" id="check5" /> */}
            {/* <div className="col-sm-12 text-center">
            <label className="form-check-label" for="check5" align="middle">
              By clicking register you agree with the terms and conditions.
            </label>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="col-sm-12 text-center">
          <button className="btn btn-primary" onClick={addPackage}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddPackage;
