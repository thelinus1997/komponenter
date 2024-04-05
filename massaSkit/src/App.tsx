import React, { useState } from "react";
import "./App.css";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";
const App = () => {
  const [value, setValue] = useState(0);
  const handleValue = (input: number) => {
    console.log("aaaa");
    setValue(input);
  };
  return (
    <div>
      <h1>Change this number: {value}</h1>
      <MeatballMenu handleInput={handleValue} />
    </div>
  );
};

export default App;
