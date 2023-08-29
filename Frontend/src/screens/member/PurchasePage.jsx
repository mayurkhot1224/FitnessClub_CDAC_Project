import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { url } from "../../common/constant";
import { Link,useHistory } from "react-router-dom";
import { useLocation} from "react-router";
import Logout from '../../screens/common/Logout';
import { useSelector } from "react-redux";

const Purchasepage = () => {

    const isSignin = useSelector((state) => state.isSignin);
    const location = useLocation();
    const member = localStorage.getItem('myData');
    const history = useHistory(); 


    const [selectedPackage, setSelectedPackage] = useState("");
    const [packages, setPackages] = useState([]);

    const [selectedTrainer, setSelectedTrainer] = useState("");
    const [trainers, setTrainers] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState("");
    const[branches,setBranches] = useState([]);


    const loginStatus = sessionStorage.getItem('LoginStatus');
  if( loginStatus != 1){
    alert('please signin first!!')
    history.push('/login')
  }

useEffect(() => {

    axios.get(url+"/branch/branch").then((response) => {
        const result = response.data;
        if(result.status==="OK"){
            setBranches(result.response);  
        }else{
            alert("There are no gym branches");
        }
    }) 

} , []);

const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);

  };

const selectbranch = branches.map((Branch) => (
    <option value={Branch.id}>
      {Branch.city}  -  {Branch.branchName}
    </option>
  ));

  const getTrainersFromBranch = () =>
  {
    axios.get(url+"/trainer/trainers/"+selectedBranch).then((response) => {
        const result = response.data;
        if(result.status==="OK"){
            setTrainers(result.response);  
        }else{
            alert("There are no Trainers");
        }
    }) 
  }
  const selectTrainer = trainers.map((Trai) =>(
  
    <option value={Trai.id}>
         {Trai.firstName} {Trai.lastName} 
        </option>
  ));

  const handleTrainerChange = (event) => {
    setSelectedTrainer(event.target.value);
  };

  const getPackagesFromBranch = () =>
  {
    axios.get(url+"/packages/branch/"+selectedBranch).then((response) => {
        const result = response.data;
        if(result.status==="OK"){
            setPackages(result.response);  
        }else{
            alert("There are no Packages");
        }
    }) 
  }

  
  const selectPackage = packages.map((Pack) =>(
  
    <option value={Pack.id}>
         {Pack.packageName} - {Pack.price} 
        </option>
  ));

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };
  

 const handlePurchase =() => {
    if (  selectedTrainer=== '' || selectedPackage==='' || selectedBranch === '' ) {
        alert("fields cannot be empty"); 
      } else {
    const data={
        branchId:selectedBranch,
        trainerId:selectedTrainer,
        packageId:selectedPackage
    }
    axios.post(url+"/payment/add/"+member,data).then((response) => {
        const result = response.data;
        if(result.status==="OK"){
            alert("Payment Done");
            history.push("/memberpage");
        }else{
            alert("Payment not done");
        }
    })     

}
}

    return(
        <div class="privacydiv">
           <Logout/>
       <br></br><br></br>

           <div className="row">
          <div className="mx-auto col-6 col-lg-6 ">
            <label htmlFor="branch">Branch:</label>
            <select
              className="form-control"
              id="branch"
              onChange={handleBranchChange}
            >
              <option value="">Select Your Nearest Gym</option>
              {selectbranch}
            </select>

            <br></br><br></br>

            <label htmlFor="trainer">Trainer</label>
            <select
              className="form-control"
              id="trainer"
              onChange={handleTrainerChange}
              onClick={getTrainersFromBranch}
            >
              <option value="">Select Trainer </option>
               {selectTrainer}
            </select>

            <br></br><br></br>

            <label htmlFor="package">Select Package</label>
            <select
              className="form-control"
              id="package"
              onChange={handlePackageChange}
              onClick={getPackagesFromBranch}
            >
              <option value="">Select Package </option>
               {selectPackage}
            </select>
            
            <br></br><br></br>

            <div className="mb-3">
                <button className="btn btn-primary" onClick={handlePurchase}>Pay Amount</button>&nbsp;&nbsp;
            </div>    

          </div>

        </div>
      </div>   
    )
}
export default Purchasepage;