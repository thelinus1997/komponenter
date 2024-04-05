import React, { useState } from "react";
import "./meatballMenu.scss";

type Props = {
  handleInput: (input: number) => void;
};
const MeatballMenu: React.FC<Props> = ({ handleInput }) => {
  const [menuVis, setmenuVis] = useState(false);

  const menuVisibility = () => {
    setmenuVis(!menuVis);
  };
  const handleClick = (input: number) => {
    handleInput(input);
    setmenuVis(false);
  };
  return (
    <div className="meatballMenu">
      <div onClick={menuVisibility}>***</div>
      {menuVis && (
        <ul>
          <li onClick={() => handleClick(1)}>one</li>
          <li onClick={() => handleClick(2)}>two</li>
          <li onClick={() => handleClick(3)}>three</li>
        </ul>
      )}
    </div>
  );
};

export default MeatballMenu;
