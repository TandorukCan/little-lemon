import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <nav className="App-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/specials">Menu</Link>
        </li>
        <li>
          <Link to="/highlights">Reservations</Link>
        </li>
        <li>
          <Link to="">Order Online</Link>
        </li>
        <li>
          <Link to="/testimonials">Login</Link>
        </li>
      </nav>
    </>
  );
}

export default Nav;
