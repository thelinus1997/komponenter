import React, { useState } from 'react';
import riceball from "./../../assets/onigiri.svg";
import "./BentoMenu.scss";

const FoodArray: string[] = ["onigiri", "nigiri", "tempura", "sake", "dango"];

const BentoMenu = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const menuClick = () => {
    setMenuClicked(!menuClicked);
  }

  const hideClick = () => {
    setMenuClicked(false);
  }

  return (
    <div>
      <div className="bentoMenu " onClick={menuClick}>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
      </div>
      <ul className={`menulist animationGrowDown ${menuClicked ? 'visible' : ''}`}>
        {FoodArray.map((food, index) => (
          <li className="menuitems" key={index} onClick={hideClick}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default BentoMenu;
