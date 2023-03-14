import React from "react"
import Checkmark from "../images/check_mark.png"
export default function Registered() {
  return (
    <div className="registered">
      <div className="register-icon"><img className="checkmark" alt="" src={Checkmark} /></div>
      <div className="register-text">Successfully Registered</div>
    </div>
  )
}