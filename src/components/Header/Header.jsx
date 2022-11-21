import "./header.css";

function Header(props) {
  return (
    <header className="appHeader">
      <h1>{props.h1}</h1>
    </header>
  );
}

export default Header;
