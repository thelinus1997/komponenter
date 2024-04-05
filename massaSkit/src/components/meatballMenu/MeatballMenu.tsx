import React, { useState } from "react";
import "./meatballMenu.scss";
import meatballSvg from "./meatballSvg.svg";
const numArr: number[] = [1, 2, 3, 4, 5];
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
      <div className={`meatballMenu ${menuVis ? "visible" : ""}`}>
        <div className="meatballButton" onClick={menuVisibility}>
          <img src={meatballSvg} alt="" />
        </div>
        <ul className={`dropdown ${menuVis ? "visible" : ""}`}>
          {numArr.map((index) => (
            <li onClick={() => handleClick(numArr[index - 1])}>
              {numArr[index - 1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeatballMenu;
