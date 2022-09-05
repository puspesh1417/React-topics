import React, { useState } from 'react'

export default function Forms() {
  const [getUser ,setUser]=useState({
    Fname:"",
    Lname:"",
    Username:"",
    places:""
  })
  const [records, setRecords]=useState([]);
  const HandleInput=(e)=>{
const name=e.target.id;
const value=e.target.value;
console.log(name , value);
setUser({...getUser ,[name]:value})
  }
  const handleSubmit=(e)=>{
e.preventDefault();
const newObj={...getUser, id:new Date().getTime().toString()}
console.log(records)
setRecords([...records,newObj]);
setUser({Fname:"",Lname:"",Username:"",places:""})
 console.log(records)

  }
  
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="Fname" onChange={HandleInput} placeholder="First name" value={getUser.Fname} required/>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="Lname" placeholder="Last name" value={getUser.Lname} onChange={HandleInput} required/>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" value={getUser.Username}class="form-control" id="Username" placeholder="Username" onChange={HandleInput} aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" value={getUser.places}class="form-control" onChange={HandleInput} id="places" placeholder="City" required/>
    </div>
    </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

        <div>
{
  records.map((currElm)=>{
return(
  <div key={currElm.id}>

    <p>{currElm.Fname}</p><span>
    <p>{currElm.Lname}</p>
    <p>{currElm.Username}</p>
    <p>{currElm.places}</p></span>
    </div>
)
  })
}
          
        </div>
        
        
         </div>
  )
}
