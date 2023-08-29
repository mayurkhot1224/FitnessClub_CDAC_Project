import React from 'react'
import { Link } from "react-router-dom";
import Logout from '../../screens/common/Logout';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
  const history = useHistory();
  const isSignin = useSelector((state) => state.isSignin);

  const loginStatus = sessionStorage.getItem('LoginStatus');
  if (loginStatus != 1) {
    alert('please signin first!!')
    history.push('/login')
  }

  if (isSignin.status === false) {
    alert('please signin first!!')
    history.push('/login')
  }
  return (
    <div className="privacydiv">
      <Logout />
      <hr />
      <div align="center" className="admin-page">
        AdminPage
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />


      <Link to="/allmembers" > <a className="block" href=" ">Members</a> </Link>

      <Link to="/alltrainers"> <a className="block" href=" ">Trainers</a> </Link>

      <Link to="/alllocaladmins"> <a className="block" href=" ">LocalAdmins</a> </Link>

      <Link to="/allbranches"> <a className="block" href=" ">Branches</a> </Link>

      <hr />
      <hr />
      <hr />
    </div>
  )
}
export default AdminPage