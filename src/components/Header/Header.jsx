import MenuBTN from "./components/MenuBTN/MenuBTN";

import PageHead from "./components/PageHead/PageHead";

import PageLogo from "./components/PageLogo/PageLogo";

import "./header.css";

function Header() {
  return (
    <header className="appHeader">
      <PageLogo />
      <PageHead head="React" />
      <MenuBTN />
    </header>
  );
}

export default Header;
