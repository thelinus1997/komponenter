import React, { useState } from "react";
import "./App.css";
import MeatballMenu from "./components/meatballMenu/MeatballMenu";
import SearchBtn from "./components/SearchBtn/SearchBtn";
const App = () => {
  return (
    <>
      <MeatballMenu />
      <SearchBtn />
    </>
  );
};

export default App;
