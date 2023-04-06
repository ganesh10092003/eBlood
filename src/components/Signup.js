import React from "react"
import InputForm from "./InputForm"
export default function Signup(props) {
  const pushData = (e) => {
    /*push the {props.signUpData} */
    // props.handleSubmit()
    console.log("push")
  }
  return (
    <div className="sign-up">
      <form onSubmit={pushData}>
        <div className="fullname">
          <InputForm
            name="firstname"
            label="FirstName"
            handleChange={props.handleChange}
            type="text"
            placeholder="Enter FirstName"
            value={props.data.firstname}
          />
          <InputForm
            name="lastname"
            label="LastName"
            handleChange={props.handleChange}
            type="text"
            placeholder="Enter LastName"
            value={props.data.lastname}
          />
        </div>
        <InputForm
          name="username"
          label="Username"
          handleChange={props.handleChange}
          type="text"
          placeholder="Enter Usename"
          value={props.data.username}
        />
        <InputForm
          name="email"
          label="Email-ID"
          handleChange={props.handleChange}
          type="email"
          placeholder="Enter Email"
          value={props.data.email}
        />
        <InputForm
          name="password"
          label="Password"
          handleChange={props.handleChange}
          type="password"
          placeholder="Create Password"
          value={props.data.password}
        />
        <InputForm
          name="confirm-password"
          label="Confirm Password"
          handleChange={props.handleChange}
          type="password"
          placeholder="Confirm Password"
        />
        <br />
      </form>
      <button type="reset" onClick={props.handleSubmit} className="submit-signup">Submit</button>
    </div >
  )
}