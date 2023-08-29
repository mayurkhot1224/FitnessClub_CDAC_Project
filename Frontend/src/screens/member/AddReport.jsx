import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link,useHistory } from "react-router-dom";
import { useLocation} from "react-router";
import Logout from '../../screens/common/Logout';
import { useSelector } from "react-redux";

const AddReport = () => {

    const isSignin = useSelector((state) => state.isSignin);
    const location = useLocation();
    const memberData = localStorage.getItem('myData');
    const history = useHistory(); 

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [workout, setWorkout] = useState("");
    const [diet, setDiet] = useState("");
    const[report,setReport] = useState("");

    const loginStatus = sessionStorage.getItem('LoginStatus');
  if( loginStatus != 1){
    alert('please signin first!!')
    history.push('/login')
  }

    useEffect(() => {

        axios.get(url+"/report/get/"+memberData).then((response) => {
            const result = response.data;
            if(result.status==="OK"){
                setReport(result.response);          
                 setHeight(result.response.height);
                    setWeight(result.response.weight);
                    setWorkout(result.response.workout);
                    setDiet(result.response.diet);
          
            }else{
                alert("Report not updated");
            }
        }) 
    } , []);

    const addReport = () => {
        if (height === '' || weight === '') {
          alert(" Height and Weight cannot be empty");
        } else {
          let data = {
            height: height,
            weight: weight,
          };
    
          axios.post(url+"/report/add/"+memberData, data).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
              alert("report added successfully ");
              history.push("/memberpage");
            } else {
              alert(" report not added");
            }
          });
    
          
        }
      };

    return(
        <div class="privacydiv">
           
            <Logout/>
            <h2> Report</h2>

            <div className="col-md-6">
                <label htmlFor="">Height</label>
                <input type="text" className="form-control"
                 placeholder="Height" value={height}
                onChange={(e) => {setHeight(e.target.value)}}
                required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="">Weight</label>
                <input type="text" className="form-control"
                 placeholder="Weight" value={weight}
                onChange={(e)=>{setWeight(e.target.value)}}
                required/>
            </div>

            <div className="col-md-6">
                <label htmlFor="">Workout</label>
                <textarea class="form-control" rows="5" value={workout}  
                 readOnly>     
                </textarea>
            </div>

            <div className="col-md-6">
                <label htmlFor="">Diet</label>
                <textarea class="form-control" rows="5"  value={diet} 
                readOnly>     
                </textarea>
            </div>

            <hr/>
            <hr/>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={addReport}>Add</button>&nbsp;&nbsp;
            
            <Link to="/memberpage">
                <button className="btn btn-primary">Back</button>
            </Link>
            </div>
        </div>
    )
}
export default AddReport;