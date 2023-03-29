import React from "react"

export default function GradientHeadtag(props) {
  return (
    <div className="gradient-heading">
      <div className="gradient">
        <p>Register As a Donor</p>
      </div>
      <div className="heading-nav">
        <span className={props.currActive[0]} onClick={props.handleClick[0]} id="signup">Sign Up</span>
        <span className={props.currActive[1]} onClick={props.handleClick[1]} id="personal">Personal Details</span>
        <span className={props.currActive[2]} onClick={props.handleClick[2]} id="medical" >Medical Details</span>
      </div>
    </div>
  )
}