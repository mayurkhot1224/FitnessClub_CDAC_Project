import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Logout = () => {
    const [mobile, SetMobile] = useState(true);
    const history=useHistory();
    const Logout = () => {
        
             sessionStorage.setItem('LoginStatus',0);
              history.push("/");  
        }
     

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand">FitnessClub</NavLink>
            <button
                className="navbar-toggler"
                onClick={() => SetMobile(!mobile)}
            >
                <FaBars />
            </button>
             <div className={`mobile mobile-${mobile}`}>
                <button className="btn btn-danger btn-lg"
            onClick={Logout}>LOG OUT 
            </button>
                {/* <NavLink to="/" className="navbar-link join-now">Log Out</NavLink> */}
            </div>
        </nav>
    )

};
export default Logout;
