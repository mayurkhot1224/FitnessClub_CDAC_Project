import React from 'react'
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const  TrainerPage=()=> {

  const history=useHistory();
  const isSignin = useSelector((state) => state.isSignin);

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log(isSignin.user);

  const loginStatus = sessionStorage.getItem('LoginStatus');
  if( loginStatus != 1){
    alert('please signin first!!')
    history.push('/login')
  }
  return (
    <div className="privacydiv">
        <Logout/>
        <hr/>
        <div align="center" className="admin-page">
        Trainer Page
        </div>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>

        
       
        <button className="block"
        onClick={()=>{history.push('/trainermember',{trainerId:isSignin.user.id})}}>My Members
        </button>
     
      <Link to="/profilelocal"><a className="block" href=" ">  Profile </a> </Link>
      
        <hr/>
        <hr/>
        <hr/> 
        

      
    </div>
  )
}
export default TrainerPage