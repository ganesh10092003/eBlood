import React from "react"

export default function InputForm(props) {
  const minimum = props.name === "age" ? "18" : "";
  // const handleCountryAndHandleChange = (event) => {
  //   console.log(event);
  //    props.handleChange(event);
  //    props.handleSelect(event);
  // }
  const InputTag = () => {
    if (props.type === "textarea") {        //* ---------------ADDRESS INPUT TAG---------------
      return (
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          value={props.value}></textarea>
      );
    }
    else if (props.name === "bloodGroup") {       //* ---------------BLOOD GROUP DROP-DOWN---------------
      return (
        <select onChange={props.handleChange} name={props.name} >
          <option value="">{props.placeholder}</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      );
    }
    else if (props.name === "country") {        //* ---------------COUNTRY DROP-DOWN---------------
      return (
        <select
          onChange={(e) => { props.handleSelect(e); props.handleChange(e) }}
          value={props.value}
          name={props.name}
        >
          <option value="-1">{props.placeholder}</option>
          {props.countries.map((singleCountry, i) => {
            return (<option value={i} key={singleCountry.id}>{singleCountry.country}</option>)
          })}
        </select>
      )
    }
    else if (props.name === "state") {          //* ---------------STATES DROP-DOWN---------------
      const index = props.selectedCountry
      const allCountries = props.countries
      // const allStates = (index !== -1) && props.countries[index].states
      // console.log("inside Input", allStates);
      return (
        <select
          name={props.name}
          onChange={props.handleChange}
        >
          <option value="">{props.placeholder}</option>
          {
            (index !== -1) && (
              allCountries[index].states.map((singleState, i) => {
                return (
                  <option value={singleState} key={i}>{singleState}</option>
                )
              }))
          }
        </select>
      )
    }
    else {            //* ---------------REST ALL INPUT TAGs---------------
      return (
        <input
          value={props.value}
          onChange={props.handleChange}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          min={minimum}       // ------minimum age------
        />
      );
    }
  }
  return (
    <div className={props.name}>
      <label htmlFor={props.name}>{props.label}</label>
      <InputTag />
    </div>
  )
}