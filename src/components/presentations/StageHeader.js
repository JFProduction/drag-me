import React from 'react'

const StageHeader = props =>
  <div
    style={{
      display: "flex",
      position: "absolute",
      flexDirection: "row",
      width: 100+"%",
      textAlign: "center",
      marginBottom: 20,
      fontSize: 30
    }}
  >
    {props.stages.map((stage, i) => 
      <div 
        style={{
          width: 100+"%"                  
        }}
        key={i}
      >{stage}</div>
    )}
  </div>

export default StageHeader