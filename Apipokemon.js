import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Apipokemon() {
    const[nums,setNum]=useState();
    const[name,setname]=useState();
    const[moves,setmoves]=useState();
    useEffect(()=>{
        // async  function getData(){
        //     const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${nums}`)
        //     console.log(res.data.moves.length)
        //     setname(res.data.name);
        //     setmoves(res.data.moves.length); 
        // }
        // getData();
    // )}
        const fetchData =()=>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${nums}`)
            .then((response) =>{
                return response.json();
            }).then((data)=>{
                // let gagan = data
                console.log(data.name);
                setname(data.name);
            setmoves(data.moves.length);
                
            })
            
        }
        fetchData();

    })



    
  return (
    <div>
        <h1>You choose{nums}</h1>
        <h2>My name is <span style={{color:"red"}}>{name}</span></h2>
        <h3>My moves is <span style={{color:"blue"}}>{moves}</span></h3>
        <select  onChange={(event)=>{
            setNum(event.target.value)
            console.log(nums)

        }}>
            <option value='1'>1</option>
            <option value='5'>5</option>
            <option value='11'>11</option>
            <option value='15'>15</option>
            <option value='25'>25</option>
        </select>
    </div>
  )
}
