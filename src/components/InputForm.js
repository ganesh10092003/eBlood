import React from "react"

export default function InputForm(props) {
  return (
    <div className={props.name}>
      <p>{props.parahtext} </p>
      <input onChange={props.handleChange} type={props.type} name={props.name} placeholder={props.placeholder} />
    </div>
  )
}