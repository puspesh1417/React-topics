import React, { useState } from 'react'

export default function DigitalClock() {
    const [clock,setClock]=useState();
    // let a=new Date().toLocaleTimeString();
    const ReCLOCK=()=>{
       
       let a=new Date().toLocaleTimeString();
       setClock(a)
        setInterval(ReCLOCK,1000) 
    }
    
    setInterval(ReCLOCK,1000)
// clock(a)

    
  return (




    <div>
<h1>{clock}</h1>

    </div>
  )
}
