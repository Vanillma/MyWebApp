import "./menuPage.css";

function MenuPage({ toggleMenu, setToggleMenu }) {
  //
  console.log("toggle in menuPage: ", toggleMenu);
  //
  return (
    //
    <div className={`wrapperMenuPage ${toggleMenu ? "openMenu" : ""}`}>
      <button
        onClick={() => setToggleMenu("")}
        className="closeMenuButton"
      ></button>
    </div>
  );
}
// export setShowMenu;
export default MenuPage;
