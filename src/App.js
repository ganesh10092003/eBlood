import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Registered from './components/Registered.js'
import Registration from './components/Registration.js'

export default function App() {
  const [signUpData, setSignUpData] = React.useState(
    {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    })
  function updateData(event) {
    setSignUpData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  console.log(signUpData);
  return (
    <div className="App">
      <Navbar />
      {/* <Registered /> */}
      <Registration
        data={signUpData} handleChange={updateData}
      />
    </div>
  );
}