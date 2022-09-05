import React, { useEffect, useState } from 'react'

export default function Lifecyclefunctional() {
    const[setnum,addnum]=useState(0);
   useEffect(()=>{
console.log("rendering first time")
// return()=>
//     console.log("component will unmount")

   },[setnum])
    
  return (
    <>
<h1>{setnum}</h1>
    <div>
<button onClick={()=>{
addnum(setnum+1);
}}>
click here
</button>

    </div>
    </>
  )
}
