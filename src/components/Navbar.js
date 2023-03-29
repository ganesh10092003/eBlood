import React from "react";
import Logo from '../images/logo.png'
import Message_icon from '../images/messages_icon.png'
import Notification_icon from '../images/notification_icon.png'
import Profile_icon from '../images/profile_icon.png'

export default function Navbar() {

  return (
    <div className="navbar">
      <a href="#"><img src={Logo} alt="" /></a>
      <div className="nav-mid">
        <p className="nav-items"><a href="#" id="nav-text" className="home">Home</a></p>
        <p className="nav-items"><a href="#" id="nav-text" className="about">About Us</a></p>
        <p className="nav-items"><a href="#" id="nav-text" className="findblood">Find Blood</a></p>
        <p className="nav-items"><a href="#" id="nav-text" className="schedule">Schedule Donation</a></p>
        {/* <p className="nav-items"><a href="#" id="nav-text" className="register-now">Register Now</a></p> */}
      </div>
      <div className="nav-right">
        <a href="#" id="a-icon" className="message"><img className="icons" id="message_icon" src={Message_icon} alt="" /></a>
        <a href="#" id="a-icon" className="notification"><img className="icons" id="notification_icon" src={Notification_icon} alt="" /></a>
        <a href="#" id="a-icon" className="profile"><img className="profile_icon" src={Profile_icon} alt="" /></a>
      </div>
    </div>
  )
}