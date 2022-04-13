import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        {/* <img src="../components/images/userImage.png" className="nav-logo" alt="Logo" /> */}
        <img src="/images/userImage.png" width="40px" alt="Logo"  />
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
