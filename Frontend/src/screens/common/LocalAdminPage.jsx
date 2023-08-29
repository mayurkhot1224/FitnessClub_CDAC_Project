import React from 'react'
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const  LocalAdminPage=()=> {


  const history=useHistory();
  const isSignin = useSelector((state) => state.isSignin);


  const loginStatus = sessionStorage.getItem('LoginStatus');
  if( loginStatus != 1){
    alert('please signin first!!')
    history.push('/login')
  }
  return (
    <div className="privacydiv">
        <Logout/>
        <div align="center" className="admin-page">
      Manager Page
      </div>
      <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>

        <button className="block"
        onClick={()=>{history.push('/mybranchpage',{branchId:isSignin.user.branch.id})}}>Branch Page
        </button>



        <button className="block"
        onClick={()=>{history.push('/packageslist',{branchId:isSignin.user.branch.id})}}>Packages
        </button>

        <hr/>
        <hr/> 
        <hr/>
        


    </div>
  )
}
export default LocalAdminPage