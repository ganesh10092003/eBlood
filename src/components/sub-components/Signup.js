import React from "react"

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
                <div className="username">
                    <p>Username </p>
                    <input onChange={props.handleChange} type="text" name="username" placeholder="Enter UserName" />
                </div>
                <div className="email">
                    <p>Email-ID </p>
                    <input onChange={props.handleChange} type="email" name="email" placeholder="Enter Email" />
                </div>
                <div className="password">
                    <p>Password </p>
                    <input onChange={props.handleChange} type="password" name="password" placeholder="Create Password" />
                </div>
                <div className="confirm-password">
                    <p>Confirm Password </p>
                    <input onChange={props.handleChange} type="password" name="confirm-password" placeholder="Confirm Password" />
                </div>
            </form>
        </div>
    )
}