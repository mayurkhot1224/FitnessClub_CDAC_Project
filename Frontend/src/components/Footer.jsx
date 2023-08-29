import React from 'react';

import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <strong className="footer-subheading">
                    <Link to={"/login"} href="/login">
                    <strong className="footer-subheading">JOIN US NOW </strong>
                    </Link>
                    
                </strong>

                <div className="footer-sub location">
                    <strong className="footer-subheading">Location</strong>
                    <strong className="footer-desc"></strong>
                    <strong className="footer-desc">Monday Through Thursday (6AM to 8PM)</strong>
                    <strong className="footer-desc">Friday (6AM to 6PM)</strong>
                </div>
                <div className="alt-location">
                    <strong className="footer-subheading">Location</strong>
                    <span className="footer-desc">
                        216, Main Road, Sangli, IN-416416
                        <br />
                        Monday through Thursday (6AM to 8Pm). Friday (6AM to 6Pm)
                    </span>
                </div>

                <div className="wrapper">
                    <div className="footer-sub">
                        <strong className="footer-subheading">Community</strong>
                        <small>Health Awareness</small>
                        <small>Sunday Yoga Camps</small>
                        <small>Blood Donation Camps</small>
                    </div>

                    <div className="footer-sub">
                        <strong className="footer-subheading">Services</strong>
                        <small>Personal Trainer</small>
                        <small> Nutriotional Guidances</small>
                        <small> Weight Loss Program</small>
                    </div>
                   
                    
                </div>

                <span className="footer-subheading footer-copy">&copy;&nbsp;FitnessClub {currentYear}</span>
            </div>
        </footer>
    )
}

export default Footer;
