import React, { useState } from "react";
import "./App.css";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";
import SearchBtn from "./components/SearchBtn/SearchBtn";
import BentoMenu from "./components/BentoMenu/BentoMenu";
const App = () => {
  return (
    <>
      <MeatballMenu />
      <SearchBtn />
      <BentoMenu/>
    </>
  );
};

export default App;
