import { useState } from "react";
import MenuPage from "../MenuPage/MenuPage";
import "./menuBTN.css";

function MenuBTN() {
  //
  // Set init State.
  const [toggleMenu, setToggleMenu] = useState(false);
  //

  return (
    <>
      <button
        onClick={() => setToggleMenu(true)}
        className="btnWrapper"
      >
        <div className="btnLines"></div>
      </button>
      <MenuPage
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
    </>
  );
}

export default MenuBTN;
