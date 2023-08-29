import React from "react";
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const MemberPage = () => {
  

 const loginStatus = sessionStorage.getItem('LoginStatus');
  
 
  const history=useHistory();
  if( loginStatus != 1){
    alert('please signin first!!')
    history.push('/login')
  }
  const isSignin = useSelector((state) => state.isSignin);

  localStorage.setItem('myData', isSignin.user.id);

  
  return (
    <div className="privacydiv">
      <Logout />
      <div align="center" className="admin-page">
        MemberPage
      </div>
      
      <br></br><br></br>

        <button className="block"
        onClick={()=>{history.push('/purchasepage')}}>Purchase Membership
        </button>

        <button className="block"
        onClick={()=>{history.push('/addreport')}}>Add Report / View Report
        </button>

      <Link to="/profilemember"><a className="block" href=" ">          Profile        </a>      </Link>

    </div>
  );
};
export default MemberPage;
