import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <img src={logo} alt="logo" style={{ maxHeight: 100 }} />
      This is Header
    </>
  );
}

export default Header;
