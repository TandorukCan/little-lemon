function Nav() {
  return (
    <>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="App-nav">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
