import React, { useState } from 'react'

export default function Event() {
    const purple="yellow";
    // const [btnClass, setBtnClass] = useState(false)
const[getdata,setData]=useState(purple);
const[setname,setName]=useState("clicked");
    const bgChange=()=>{
        console.log("clicked")
        let newBg="pink"
       getdata===purple? setData(newBg):setData(purple);
       setname==="clicked"? setName("lets go"):setName("clicked");
        
    
    }
    const bgNormal=()=>{

        
        setData(purple);
        setName("doubleclicked");
       

    }
    
  return (
    <>
    
    <div >
        <button style={{backgroundColor:getdata}}onClick={bgChange} onDoubleClick={bgNormal}>{setname}</button>
    </div>
    
    </>
  )
}

//     const [btnClass, setBtnClass] = useState(false);
//     const [btnColor, setBtnColor] = useState("red");
//     return (
//       <div className="App">
//         <button
//           onClick={() => {
//             btnClass ? setBtnClass(false) : setBtnClass(true);
//           }}
//           className={btnClass ? "btnClass clicked" : "btnClass"}
//         >
//           button
//         </button>
//         <button
//           onClick={() => {
//             btnColor === "red" ? setBtnColor("green") : setBtnColor("red");
//           }}
//           style={{ backgroundColor: btnColor }}
//         >
//           button
//         </button>
//       </div>
//     );
//   }