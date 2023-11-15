import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Fragment>
      <input
        onClick={handleClick}
        aria-expanded={click}
        aria-controls="nav-list"
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        aria-label="Button"
      />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <nav className="App-nav">
        <ul role="navigation" aria-labelledby="menu-btn" id="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Nav;
