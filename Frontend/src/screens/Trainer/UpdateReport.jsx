import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link,useHistory } from "react-router-dom";
import { useLocation} from "react-router";
import Logout from '../../screens/common/Logout';
import { useSelector } from "react-redux";

const UpdateReport = () => {

    const isSignin = useSelector((state) => state.isSignin);
    const location = useLocation();
    const memberData = location.state.member;
    const history = useHistory(); 

    const [id, setId] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [workout, setWorkout] = useState("");
    const [diet, setDiet] = useState("");
    const[report,setReport] = useState("");

    console.log(memberData);
console.log("xxxxxxx");



useEffect(() => {
    console.log("User component is mounted");
    axios.get(url+"/report/get/"+memberData.id).then((response) => {
        const result = response.data;
        if(result.status==="OK"){
            setReport(result.response);  
            console.log(result.response);
            console.log("Report id = "+result.response.id);    
            setId(result.response.id);    
             setHeight(result.response.height);
                setWeight(result.response.weight);
                setWorkout(result.response.workout);
                setDiet(result.response.diet);
      
        }else{
            alert("Report not updated");
        }
    }) 

    
  
} , []);

    const handleUpdate = () => {
        if ( height === '') {
            alert("fields cannot be empty"); 
          } else {
        const data={
            "id":id,
            "height":height,
            "weight":weight,
            "workout":workout,
            "diet":diet

        }
        axios.put(url+"/report/update/"+memberData.id,data).then((response) => {
            const result = response.data;
            if(result.status==="OK"){
                alert("Report Updated");
                history.push("/trainerpage");
            }else{
                alert("Report not updated");
            }
        })     

    }
    }

    return(
        <div class="privacydiv">
           
            <Logout/>
            <h2>{memberData.firstName} Report</h2>
            <div className="col-md-6">
                <label htmlFor="">Report Id</label>   
                <input type="number" className="form-control" value={id}  readOnly />
            </div>
            <div className="col-md-6">
                <label htmlFor="">Height</label>
                <input type="text" className="form-control"
                value={height}
                onChange={(e) => {setHeight(e.target.value)}}
                //readOnly
                required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">Weight</label>
                <input type="text" className="form-control"
                value={weight}
                onChange={(e)=>{setWeight(e.target.value)}}
                required/>
            </div>

            <div className="col-md-6">
                <label htmlFor="">Workout</label>
                {/* <input type="text" className="form-control"
                value={packageDescription}
                onChange={(e)=>{setpackageDescription(e.target.value)}}
                //readOnly
                required/> */}
                <textarea class="form-control" rows="5"  value={workout} 
                onChange={(e)=>{setWorkout(e.target.value)}}  required>     
                </textarea>
            </div>

            <div className="col-md-6">
                <label htmlFor="">Diet</label>
                <textarea class="form-control" rows="5"  value={diet} 
                onChange={(e)=>{setDiet(e.target.value)}}  required>     
                </textarea>
            </div>

            <hr/>
            <hr/>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>&nbsp;&nbsp;
            
            <Link to="/trainerpage">
                <button className="btn btn-primary">Back</button>
            </Link>
            </div>
        </div>
    )
}
export default UpdateReport;