import React, { useState } from "react"
import GradientHeadtag from "./GradientHeadtag"
import Signup from "./Signup"
import PersonalDetails from './PersonalDetails';
export default function Registration(props) {
  const [display, setDisplay] = useState(
    <Signup
      data={props.data}
      handleChange={props.handleChange}
    />);
  const [activeAll, setActiveAll] = useState(["active", "", ""])
  const Activate1 = () => {
    console.log("activated 1");
    setActiveAll(["active", "", ""])
    setDisplay(() => {
      return (
        <Signup
          data={props.data}
          handleChange={props.handleChange}
          handleSubmit={(Activate2)}
        />)
    })
  }
  const Activate2 = () => {
    console.log("activated 2");
    setActiveAll(["", "active", ""])
    setDisplay(() => {
      return (
        <PersonalDetails
          handleChange={props.handleChange}
          data={props.data}
          countries={props.countries}
        />);
    })
  }
  const Activate3 = () => {
    console.log("activated 3");
    setActiveAll(["", "", "active"])
  }

  // const [display, setDisplay] = React.useState()
  // if (activeAll[0] === "active") {
  //   setDisplay(<Signup />);
  // }
  // else if (activeAll[1] === "active") {
  //   setDisplay(<personalDetails />);
  // }

  return (
    <div className="registration">
      <GradientHeadtag
        currActive={activeAll}
        handleClick={[Activate1, Activate2, Activate3]}
      />
      {/* <BrowserRouter>
        <Route path="/" exact component={Sign_up} />
      </BrowserRouter> */}
      {/* <Signup
        data={props.data}
        handleChange={props.handleChange}
      /> */}
      {display}
    </div>
  )
}