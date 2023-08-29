import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link,useHistory } from "react-router-dom";
import { useLocation} from "react-router";
import Logout from '../../screens/common/Logout';

const UpdateBatch = () => {
    const [id, setId] = useState("");
    const [batchType, setbatchType] = useState("");
    const [batchTime, setbatchTime] = useState(0.0);
    //const [packageDescription, setpackageDescription] = useState("");
    const location = useLocation();
    const batchData = location.state.batchess;
    const history = useHistory();

    


    useEffect(() => {
        console.log("User component is mounted");
        setbatchTime(batchData.batchTime);
    
    } , []);

    console.log(batchData);
    console.log("xxxxxxx");

console.log(batchData);
    const handleUpdate = () => {
        // if (batchType === '' || batchTime === '') {
        //     alert("fields cannot be empty"); 
        //   } else {


        const data={
            "id":batchData.id,
            "batchType":batchData.batchType,
            "batchTime":batchTime,
            "branch":batchData.branch

        }
        setId(batchData.id);
        axios.put(url+"/batches/update/"+batchData.id,data).then((response) => {
            const result = response.data;
            if(result.status==="OK"){
                alert("Batch Updated");
                history.push("/localadminpage");
            }else{
                alert(" Batch not updated");
            }
        })
    // }

    }

    return(
        <div class="privacydiv">

            <Logout/>
            <h2>Update Batch</h2>
            <div className="col-md-6">
                <label htmlFor="">Batch Id</label>   
                <input type="number" className="form-control" value={batchData.id}  readOnly/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">Batch Type</label>
                <input type="text" className="form-control"
                value={batchData.batchType}
                onChange={(e) => {setbatchType(e.target.value)}}
                required
                readOnly/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">Batch Time</label>
                <input type="time" className="form-control"
                value={batchTime}
                onChange={(e)=>{setbatchTime(e.target.value)}}
                required/>
            </div>
<hr/>
<hr/>
<hr/>

            
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            
            <Link to="/batches">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
            </div>
        </div>
    )
}
export default UpdateBatch;