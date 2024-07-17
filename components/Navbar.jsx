import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="carzonrent-navbar">
            <div className="left-logo">
                <img src="https://www.carzonrent.com/webcor/images/img/cor_logo.svg?v=2028" alt="" />
            </div>

            <div className="nav-interact">
                <div className="nav-hrefs-wrapper">
                    <div className="nav-hrefs" style={{ color: '#fc0' }}>
                        <img src="https://www.carzonrent.com/webcor/images/icons/discount-icon.svg" alt="" />
                        Travel Packages
                    </div>
                    <div className="nav-hrefs">Business Solutions</div>
                    <div className="nav-hrefs">Services</div>
                    <div className="nav-hrefs">Blog</div>
                    <div className="nav-hrefs">About Us</div>
                    <div className="nav-hrefs">Contact US</div>
                </div>
                <div className="login-signup-btn">
                    <i className="fa-solid fa-user"></i>
                    Login/SignUp
                </div>
            </div>
        </div>
    )
}

export default Navbar
