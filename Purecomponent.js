import React, {PureComponent} from 'react'

export default class Purecomponent extends PureComponent {
    constructor()
    {
        
      super();
      this.state={
        count:0
      }
    }
    componentDidUpdate(){
      console.log("hii")
    }
   render()
   {
    // console.warn("check rerefring")
    
    return (
      <div className="App">
       {this.state.count}
        <button 
        onClick={()=>this.setState({count:this.state.count+1})}
        >Update Count</button>
      </div>
    );
   }
  }