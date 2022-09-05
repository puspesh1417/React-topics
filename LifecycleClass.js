import React, { Component } from 'react'

export default class LifecycleClass extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }

    }
  
    componentDidUpdate(){
        console.log("updating state")
    }
    componentDidMount(){
      console.log("rendering data")
    }
    componentWillUnmount(){
      console.log("change happens")
    }
  render() {
    return (
      <div className="App">
    <h1>  {this.state.count}</h1>
       <button 
       onClick={()=>this.setState({count:this.state.count+1})}
       >Update Count</button>
     </div>
   );
  }
 }
