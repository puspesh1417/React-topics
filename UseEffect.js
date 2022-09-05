import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function UseEffect() {
    const[num,setnum]=useState(0);
    const[nums,setnums]=useState(0);
    useEffect(()=>{
        console.log("rendering first time")
    },[nums])
    // useCallback(()=>{
    //   alert("usecallback")
      
    // },)
    // useMemo(()=>{
    //         alert("usecallback")
    //     },[nums])
    

    
  return (
    <div>


        <button onClick={()=>{
setnum(num+1)
        }}>click me{num}</button>
<button onClick={()=>{
    setnums(nums+1)
}}>click me {nums}</button>

        
    </div>
  )
}
// what is React virtual dom
// what is diffing and renconcillation
// what is class and functional components
// what is props and how to mutate props
// Explain state and usestate
// what is useeffect and cleanup work in functional component
// Explain Lifecycle methods in class component
// Explain usecallback and usememo
// Explain hoc and their example
// Explain props drilling and context api
// Explain redux and its flow