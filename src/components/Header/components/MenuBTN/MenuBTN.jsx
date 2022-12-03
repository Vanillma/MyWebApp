import { useState } from "react";
import MenuPage from "../MenuPage/MenuPage";
import "./menuBTN.css";

function MenuBTN() {
  //
  const [show, setShow] = useState(false);
  //
  // test
  console.log("1-ShowState: ", show);
  //
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="btnWrapper"
      >
        <div className="btnLines"></div>
      </button>
    {console.log("2-ShowState: ", show)}
      <MenuPage state={show} />
    </>
  );
}

export default MenuBTN;
