import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { useHistory } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { Link } from "react-router-dom";

const AddBatch = () => {
  const [branch, setBranch] = useState("");
  const [batchTime, setTime] = useState("");
  const [batchType, setType] = useState("");
  const history = useHistory();

  const addBatch = () => {
    if (batchTime === "" || batchType === "" || branch === "") {
      alert("batchTime  cant be left empty");
    } else {
      let data = {
        batchTime: batchTime,
        batchType: batchType,
      };
      console.log(data);

      axios.post(url + "/batches/add/" + branch, data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {
          alert("successfully registered");
          history.push("/localadminpage");
        } else {
          alert("branch not added");
        }
      });
    }
  };
  function onChangeValue(event) {
    setType(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="privacydiv">
      <Logout />


      <div className="form-group row">
        <label
          for="email5"
          className="col-sm-2 col-form-label"
          align="middle">
          Branch Id
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            id="fname"
            // defaultValue={batchBranchId}
            placeholder="Branch Id"
            // disabled
            onChange={(event) => {
              setBranch(event.target.value);
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
          Batch Time
        </label>
        <div className="col-sm-3">
          <input
            type="time"
            className="form-control"
            id="fname"
            value={batchTime}
            placeholder="Batch Time"
            onChange={(event) => {
              setTime(event.target.value);
            }}
            required
          />
        </div>
      </div>

      <div className="form-group row">
        <label
          for="locality5"
          className="col-sm-2 col-form-label"
          align="middle">
          Batch Type
        </label>
        <div className="col-sm-3">
          {/* <input
            type="text"
            className="form-control"
            id="locality"
            placeholder="Batch Type"
            onChange={(event) => {
              setType(event.target.value);
            }}
            required
          /> */}
          <div>
            <label class="container" for="yoga">

              <input type="radio" value="YOGA" id="yoga" name="type" onChange={onChangeValue} />
              <span class="checkmark"></span>
              YOGA
            </label>
            <label class="container" for="zumba">

              <input type="radio" value="ZUMBA" id="zumba" name="type" onChange={onChangeValue} />
              <span class="checkmark"></span>
              ZUMBA
            </label>
            <label class="container">

              <input type="radio" value="AEROBICS" id="aerobics" name="type" onChange={onChangeValue} />
              <span class="checkmark"></span>
              AEROBICS
            </label>
            <label class="container">

              <input type="radio" value="CROSSFIT" id="crossfit" name="type" onChange={onChangeValue} />
              <span class="checkmark"></span>
              CROSSFIT
            </label>
            <label class="container">

              <input type="radio" value="WEIGHT_TRAINING" id="weight" name="type" onChange={onChangeValue} />
              <span class="checkmark"></span>
              WEIGHT TRAINING
            </label>
          </div>
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
          <button className="btn btn-primary" onClick={addBatch}>
            Add Batch
          </button>
          <Link to="/batches">
            &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>

    </div>
    // </div>
  );
};
export default AddBatch;
