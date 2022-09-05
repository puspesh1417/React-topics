import React, { useState } from 'react'
import DelteTodos from './DelteTodos';

import Showtodos from './Showtodos';

export default function Todos() {
    const[Task,setTask]=useState("");
    const[Data,setData]=useState([]);
    const [toggleButton, setToggleButton] = useState(true);
    const[editing,SetEditing]=useState(null)

 const myChange=(e)=>{
    // e.preventDefault();
setTask(e.target.value)
}
const Sumit=(id)=>{
    // e.preventDefault();
if(Task&&!toggleButton){
    setData( Data.map((elem) => {
        if (id ===editing) {
            return { ...id, setTask }
        }
        return elem;
    })
)
setToggleButton(true);

setTask('');

SetEditing(null)
}


else{
const mydata=Task;
setData([...Data,mydata]);
// console.log(Task)
setTask("");
}
}
const delteItem=(id)=>{
   console.log("delete")
        const finalData = Data.filter((elm,index)=>{
            return index !== id;
        })
        
        setData(finalData)
    }

const Edititem=(id)=>{
    // console.log("edit")
    let Newedit=Data.find((elem,index)=>{
        return id===index;
    })
    console.log(Newedit)
    setTask(Newedit)
    setToggleButton(false)
    SetEditing(id)
}

  return (
    <>
    <div>Todos list</div>
    <center>
    <input value={Task} onChange={myChange}>
    </input>

    {
        toggleButton ? <button onClick={Sumit}>Addtodos</button>:
        <button onClick={Sumit}>update Todos</button>
    }
    {/* <button onClick={Sumit}>Addtodos</button> */}
    </center>
    {
        // Data.map((value,index)=>{
            // id={index}
        //     return<div>
        //         <li>
        //         {value}
        //         <button onClick={deleting}>delete</button>
                
        //         </li>
        //     </div>
            
        // })
        Data.map((items,index)=>{
           return <div>
                <Showtodos 
                task={items}/>

                <DelteTodos
                id={index}
                key={index}
                Ondelete={delteItem}
                Onedit={Edititem}
                />
            </div>
        })
    }
   
    </>
  )
}
