import logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      This is Footer
      <img src={logo} alt="logo" style={{ maxHeight: 100 }} />
      <ul>
        <li>
          <a href="https://www.musicade.uk/">Social Media</a>
        </li>
        <li>Contact</li>
        <li>Address</li>
      </ul>
    </>
  );
}

export default Footer;
