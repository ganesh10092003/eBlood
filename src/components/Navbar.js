import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="#">    <img src="" />   </a>
            <div className="main-nav">
                <a href="#" id="nav-items" className="home"><span className="nav-text">Home</span></a>
                <a href="#" id="nav-items" className="about"><span className="nav-text">About Us</span></a>
                <a href="#" id="nav-items" className="findblood"><span className="nav-text">Find Blood</span></a>
                <a href="#" id="nav-items" className="Schedule Donation"><span className="nav-text">Schedule Donation</span></a>
            </div>
        </div>
    )
}