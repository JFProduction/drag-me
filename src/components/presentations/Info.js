import React from 'react'
import { LineInfoCtx } from "../../contexts"
import Draggable from 'react-draggable'

const Info = () => (
  <LineInfoCtx.Consumer>
    {({item, clicked}) => 
      <Draggable
        axis="x"
        grid={[50,50]}
      >
        <div 
          className="info"
          onClick={clicked(item.id)}
        >
          Fake #{item.id}
        </div>
      </Draggable>
    }
  </LineInfoCtx.Consumer>
)

export default Info