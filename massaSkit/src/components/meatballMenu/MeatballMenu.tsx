import React, { useState } from "react";
import "./meatballMenu.scss";
const MeatballMenu = () => {
  const [menuVis, setmenuVis] = useState(false);
  const menuVisibility = () => {
    setmenuVis(!menuVis);
  };
  const handleClick = (sheeeee: string) => {
    console.log(sheeeee);
    setmenuVis(false);
  };
  return (
    <div>
      <div onClick={menuVisibility}>***</div>
      {menuVis && (
        <ul>
          <li onClick={() => handleClick("one")}>one</li>
          <li onClick={() => handleClick("two")}>two</li>
          <li onClick={() => handleClick("three")}>three</li>
        </ul>
      )}
    </div>
  );
};

export default MeatballMenu;
