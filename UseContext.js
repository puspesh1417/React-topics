import React ,{useContext}from 'react';
import { firstname } from '../App';

export default function UseContext() {
    const fname=useContext(firstname);
  return (

    <h1>
        My Name Is{fname}
    </h1>
  )
}
// export default UseContext;