import MenuBTN from "./components/MenuBTN/MenuBTN";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import "./header.css";

function Header() {
  return (
    <header className="appHeader">
      <HeaderLogo />
      <MenuBTN />
    </header>
  );
}

export default Header;
