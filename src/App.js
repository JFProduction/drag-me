import React, { Component } from 'react'
import { LineInfoCtx } from './contexts'
import LineInfo from './components/containers/LineInfo'
import Stages from './components/presentations/Stages'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      info: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
        {id: 6},
      ]
    }
  }

  clicked = id => e => {
    console.log(e.target.style.transform)
    console.log(`clicked ${id}`)
  }

  render() {
    return (
      <div
        style={{
          width: 100+"%",
          height: 100+"%",
          position: "relative"
        }}
      >
        <Stages
          stages={["Pre", "Prod", "Post"]}
        />
        <div
          style={{
            paddingTop: 3+"em"
          }}
        >
        {
          this.state.info.map((item, i) =>
            <LineInfoCtx.Provider value={{item, clicked: this.clicked}}>
              <LineInfo key={i} />
            </LineInfoCtx.Provider>
          )    
        }
        </div>
      </div>
    )
  }
}

export default App;
