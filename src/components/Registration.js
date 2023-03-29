import React from "react"
import GradientHeadtag from "./GradientHeadtag"
import Signup from "./Signup"
export default function Registration(props) {

  const [activeAll, setActiveAll] = React.useState(["active", "", ""])
  function Activate1() {
    setActiveAll(["active", "", ""])
  }
  function Activate2() {
    setActiveAll(["", "active", ""])
  }
  function Activate3() {
    setActiveAll(["", "", "active"])
  }

  return (
    <div className="registration">
      <GradientHeadtag
        currActive={activeAll}
        handleClick={[Activate1, Activate2, Activate3]}
      />
      {/* <BrowserRouter>
        <Route path="/" exact component={Sign_up} />
      </BrowserRouter> */}
      <Signup
        data={props.data}
        handleChange={props.handleChange}
      />
    </div>
  )
}