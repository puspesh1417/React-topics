import { useState } from "react";
import "./styles.css";

export default function App() {
  const [set, myset] = useState("light");
  const [sets, mysets] = useState("enable dark mode");
  const togglemode = () => {
    if (set === "light") {
      myset("dark");
      document.body.style.backgroundColor = "blue";
      mysets("disable dark mode");
    } else {
      myset("light");
      document.body.style.backgroundColor = "white";
      mysets("enable dark mode");
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>Start editing to see some magic happen!</h2>
      <button onClick={togglemode}>{sets}</button>
    </div>
  );
}
