import React, { Component } from 'react'

export default class Properprops extends Component {
    state={
        name:"thepsuspesh",
        city:this.props.city,
    }
     
  render() {
    return (
        
      <div>

        <h1>my name is{this.state.name} and my city is{this.state.city}</h1>
      </div>
    )
  }
}
