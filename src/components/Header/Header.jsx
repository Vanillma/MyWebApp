import MenuBTN from "./components/MenuBTN/MenuBTN";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <MenuBTN />
    </header>
  );
}

export default Header;
