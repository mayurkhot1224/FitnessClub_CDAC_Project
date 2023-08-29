import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [mobile, SetMobile] = useState(true);


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
                <NavLink exact to="/" activeClassName="current" className="navbar-link">
                    Home
                </NavLink>

                <NavLink to="/about" activeClassName="current" className="navbar-link">
                    About Us
                </NavLink>

                <NavLink to="/price" className="navbar-link" activeClassName="current">
                    Pricing
                </NavLink>

                <NavLink to="/contact" activeClassName="current" className="navbar-link">
                    Contact
                </NavLink>

                <NavLink to="/login" className="navbar-link join-now">Join Now</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
