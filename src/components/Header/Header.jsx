import MenuBTN from "./components/MenuBTN/MenuBTN";

import PageLogo from "./components/PageLogo/PageLogo";

import "./header.css";

function Header() {
  return (
    <header className="appHeader">
      <PageLogo />
      <MenuBTN />
    </header>
  );
}

export default Header;
