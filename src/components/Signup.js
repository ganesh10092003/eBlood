import React from "react"
import InputForm from "./InputForm"
export default function Signup(props) {
  return (
    <div className="sign-up">
      <form>
        <div className="fullname">
          <div className="firstname">
            <p>FirstName</p>
            <input onChange={props.handleChange} type="text" name="firstname" placeholder="Enter FirstName" />
          </div>
          <div className="lastname">
            <p>LastName</p>
            <input onChange={props.handleChange} type="text" name="lastname" placeholder="Enter LastName" />
          </div>
        </div>
        <InputForm
          name="username"
          parahtext="Username"
          handleChange={props.handleChange}
          type="text"
          placeholder="Enter Usename"
        />
        <InputForm
          name="email"
          parahtext="Email-ID"
          handleChange={props.handleChange}
          type="email"
          placeholder="Enter Email"
        />
        <InputForm
          name="password"
          parahtext="Password"
          handleChange={props.handleChange}
          type="password"
          placeholder="Create Password"
        />
        <InputForm
          name="confirm-password"
          parahtext="Confirm Password"
          handleChange={props.handleChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="submit-signup">Submit</button>
      </form>
    </div>
  )
}