import React from 'react'
import StageHeader from "./StageHeader"

import "./pres.css"

const Stages = props => 
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      height: 100+"%",
      zIndex: 0,
      width: 100+"%"
    }}
  >
    <StageHeader {...props} />
  {
    props.stages.map((_, i) =>
      <div key={i} className="stage" />
    )
  }
  </div>

export default Stages