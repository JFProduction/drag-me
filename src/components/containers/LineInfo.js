import React from 'react'
import Info from '../presentations/Info'

class LineInfo extends React.Component {
  render() {
    return (
      <div
        style={{
          height: 30,
          width: 100+"%",
          display: "flex",
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 999
        }}
      >
        <span
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#ccc",
            position: "absolute"
          }}
        ></span>
        <Info
          style={{
            marginLeft: 40
          }}
        />
      </div>
    )
  }
}

export default LineInfo