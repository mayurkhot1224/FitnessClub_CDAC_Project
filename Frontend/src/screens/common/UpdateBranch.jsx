import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link,useHistory } from "react-router-dom";
import { useLocation} from "react-router";
import Logout from '../../screens/common/Logout';

const UpdateBranch = () => {
    const [id, setId] = useState("");
    const [branchName, setbranchName] = useState("");
    const [locality, setLocality] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [phone, setPhone] = useState(0);
   // const [branch, setBranch] = useState(0);
    const location = useLocation();
    const branchData = location.state.branches;
    const history = useHistory();


    
    useEffect(() => {
        console.log("User component is mounted");
        setLocality(branchData.locality);
        setZipCode(branchData.zipCode);
      //.  getBranch();
    
    } , []);
    
console.log(branchData);
console.log("xxxxxxx");

    const handleUpdate = () => {

        const data={

            "id":branchData.id,
            "branchName":branchData.branchName,
            "locality":locality,
            "city":branchData.city,
            "state":branchData.state,
            "zipCode":zipCode,
            "phone":branchData.phone,

        }
        console.log(data);
        setId(branchData.id);
        axios.put(url+"/branches/update/"+branchData.id,data).then((response) => {
            const result = response.data;
            if(result.status==="OK"){
                alert("Branch Updated");
                history.push("/allbranches");
            }else{
                alert(" Branch not updated");
            }
        })

    }

    return(
        <div class="privacydiv">

            <Logout/>
            <h2>Update Branch</h2>
            <div className="col-md-6">
                <label htmlFor="">Branch Id</label>   
                <input type="number" className="form-control" value={branchData.id}  readOnly/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">Branch Name</label>
                <input type="text" className="form-control"
                value={branchData.branchName}
                onChange={(e) => {setbranchName(e.target.value)}}
                required
                readOnly
               // readOnly
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="">Locality</label>
                <input type="text" className="form-control"
                value={locality}
                onChange={(e)=>{setLocality(e.target.value)}}
                required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">City</label>
                <input type="text" className="form-control"
                value={branchData.city}
                onChange={(e)=>{setCity(e.target.value)}}
                required
                readOnly
              //  readOnly
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="">State</label>
                <input type="text" className="form-control"
                value={branchData.state}
                onChange={(e)=>{setState(e.target.value)}}
                required
                readOnly
               // readOnly
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="">ZipCode</label>
                <input type="number" className="form-control"
                value={zipCode}
                onChange={(e)=>{setZipCode(e.target.value)}}
                required
                //readOnly
               // readOnly
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="">Phone</label>
                <input type="number" className="form-control"
                value={branchData.phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                required
                readOnly
                //readOnly
                />
            </div>
<hr/>
<hr/>
<hr/>

            
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            
            <Link to="/allbranches">
               &nbsp;&nbsp; <button className="btn btn-primary">Back</button>
            </Link>
            </div>
        </div>
    )
}
export default UpdateBranch;    