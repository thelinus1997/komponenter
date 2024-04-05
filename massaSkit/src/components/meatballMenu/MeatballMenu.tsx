import React, { useState } from "react";
import "./meatballMenu.scss";

const MeatballMenu = () => {
  const [menuVis, setmenuVis] = useState(false);
  const [value, setValue] = useState(0);

  const menuVisibility = () => {
    setmenuVis(!menuVis);
  };
  const handleClick = (input: number) => {
    setValue(input);
    setmenuVis(false);
  };
  return (
    <div>
      <h1>Change this number: {value}</h1>
      <div className="meatballMenu">
        <div onClick={menuVisibility} className="meatballButton">
          ***
        </div>
        {menuVis && (
          <ul>
            <li onClick={() => handleClick(1)}>one</li>
            <li onClick={() => handleClick(2)}>two</li>
            <li onClick={() => handleClick(3)}>three</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MeatballMenu;
