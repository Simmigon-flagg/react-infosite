import React from "react";
import user from "../../images/userImage.png"
function Header() {
  return (
    <header>
      <nav className="nav">
        {/* <img src="../components" className="nav-logo" alt="Logo" /> */}
        <img src={user} width="40px" alt="Logo"  />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
