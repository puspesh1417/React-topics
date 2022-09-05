// import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calculator } from './componenets/Calculator';
import Properprops from './componenets/Properprops';
import Todos from './Todos';
import UseEffect from './componenets/UseEffect';
import UseContext from './componenets/UseContext';
import { createContext } from 'react';
// import Controlled from './componenets/Controlled';
// import DigitalClock from './componenets/DigitalClock';
import Fetch from './componenets/Fetch';
import Ipl from './componenets/Ipl';
import Apipokemon from './componenets/Apipokemon';
import LifecycleClass from './componenets/LifecycleClass';
import Purecomponent from './componenets/Purecomponent';
import Lifecyclefunctional from './componenets/Lifecyclefunctional';
// import UseReducer from './componenets/useReducer';
// import Event from './componenets/Event';
// import Hooks from './componenets/Hooks';

import Uncontrolled from './componenets/Uncontrolled';
// import Forms from './componenets/Forms';
// import sum, { Calculator } from './componenets/Calculator';
const firstname=createContext();
function App() {
  return (
    <div>

      {/* <Forms/> */}
      {/* <Event/> */}
      {/* <Hooks/> */}
      {/* <Uncontrolled/> */}
      {/* <Controlled/> */}
      {/* <DigitalClock/> */}
      {/* <Fetch/> */}
      {/* <Ipl/> */}
      {/* <UseReducer/> */}
    {/* <Properprops city="patna" /> */}
    {/* <Calculator/> */}
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<div>hompage</div>}/>
      <Route path="/About" element={<div> This is About page</div>}/>
      <Route path="/Contact" element={<div> This is contact us</div>}/>
    </Routes>
    </BrowserRouter>
    {/* <Todos/> */}
    {/* <UseEffect/> */}
    {/* <firstname.Provider value={"thepuspesh"}>

    <UseContext/>
    </firstname.Provider>
     */}
    {/* <Apipokemon/> */}
    {/* <LifecycleClass/> */}
    {/* <Purecomponent/> */}
    {/* <Lifecyclefunctional/> */}

    </div>
   
  );
}

export default App;
export {firstname};
