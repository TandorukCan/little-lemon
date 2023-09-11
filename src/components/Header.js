import logo from "../assets/logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="App-header">
      <img className="logo" src={logo} alt="logo" style={{ maxHeight: 100 }} />
      <Nav />
    </header>
  );
}

export default Header;
