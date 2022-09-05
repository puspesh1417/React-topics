import React, { useState } from 'react'

export default function Hooks() {
const [numbe ,setNumber]=useState(0);


    // let count=1;
const InNumb=()=>{
    
    setNumber(numbe+1);
    if(numbe===10){
        setNumber(numbe)
    }
}
const decNumb=()=>{

    setNumber(numbe-1)
    if(numbe===0){
        setNumber(numbe)
    }
}
const Reset=()=>{
setNumber(0)

}

  return (
    <div>
<h1> {numbe}</h1>
<button on onClick={InNumb}>Increment</button>
<button on onClick={decNumb}>Decrement</button>
<button on onClick={Reset}>Reset me</button>
    </div>
  )
}
