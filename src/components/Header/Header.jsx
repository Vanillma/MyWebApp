import MenuBTN from "./components/MenuBTN/MenuBTN";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import MenuPage from "./components/MenuPage/MenuPage";
import "./header.css";

function Header() {
  return (
    <header className="appHeader">
      <HeaderLogo />
      <MenuBTN />
      <MenuBTN />
    </header>
  );
}

export default Header;
