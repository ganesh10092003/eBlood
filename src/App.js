import React, { useState } from "react"
import './App.css';
import Navbar from './components/Navbar.js'
// import Registered from './components/Registered.js'
import Registration from './components/Registration.js'

export default function App() {
  const [userData, setUserData] = useState(
    {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      age: "",
      bloodGroup: "",
      country: "",
      state: "",
    })
  const listOfCountries =
    [
      {
        id: 0,
        country: "India",
        states: ["AP", "UP", "Orissa", "Telangana", "Kerala", "TamilNadu", "WestBengal"]
      },
      {
        id: 1,
        country: "USA",
        states: ["California", "Texas", "Florida", "Ohio", "Alaska", "Hawai", "Washington"]
      },
      {
        id: 2,
        country: "Australia",
        states: ["Queensland", "New South Wales", "Victoria", "Tasmania"]
      }
    ]
  const updateData = (event) => {
    setUserData((prev) => {
      const { name, value } = event.target
      if (name === "country") {
        return {
          ...prev,
          [name]: listOfCountries[value].country,
          state: ""
        }
      }
      return {
        ...prev,
        [name]: (name === "country") ? listOfCountries[value].country : value
      }
    })
  }
  console.log(userData);
  return (
    <div className="App">
      <Navbar />
      {/* <Registered /> */}
      <Registration
        data={userData} handleChange={updateData} countries={listOfCountries}
      />
    </div>
  );
}