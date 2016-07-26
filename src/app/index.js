import React from 'react'
import {render} from 'react-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appData: {}
    }
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}
