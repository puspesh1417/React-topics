import React from 'react'

export default function Ipl() {
    // const fetchData =()=>{
        fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            // let gagan = data
            console.log(data);
            // setUser(data.results)
        })
    // }

  return (
    <div>Ipl</div>
  )
}
