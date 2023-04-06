import React, { useState } from "react"
import InputForm from "./InputForm"

export default function PersonalDetails(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const statePlaceholder = (selectedIndex === -1 ? "First Select Country" : "Select State");
  // console.log(props.data.country);

  const setCountry = (event) => {
    // console.log(event.target.value)
    setSelectedIndex(event.target.value)
  }
  // console.log("inside Parent", selectedIndex);
  return (
    <div className="personal-details">
      <form>
        <InputForm
          name="phone"
          label="Phone Number"
          handleChange={props.handleChange}
          type="tel"
          placeholder="Enter Phone Number"
        // value={props.data.phone}
        />
        <InputForm
          name="address"
          label="Address"
          handleChange={props.handleChange}
          type="textarea"
          placeholder="Full Address"
        // value={props.data.address}
        />
        <div className="age_and_blood">
          <InputForm
            name="age"
            label="Age"
            handleChange={props.handleChange}
            type="number"
            placeholder="Age"
          // value={props.data.age}
          />
          <InputForm
            name="bloodGroup"
            label="Blood Group"
            handleChange={props.handleChange}
            type="select"
            placeholder="Select Blood Group"
          // value={props.data.bloodGroup}
          />
        </div>
        <div className="country-state">
          <InputForm
            name="country"
            label="Country"
            type="select"
            placeholder="Select Country"
            handleChange={props.handleChange}
            countries={props.countries}
            handleSelect={setCountry}
            value={selectedIndex}
          />
          <InputForm
            name="state"
            label="State"
            countries={props.countries}
            handleChange={props.handleChange}
            type="select"
            placeholder={statePlaceholder}
            selectedCountry={selectedIndex}
            value={props.data.state}
          />
        </div>
      </form>
    </div>
  )
}