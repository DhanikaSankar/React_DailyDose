import React from "react";
import Logo from "./images/react-logo.png";

function Header() {
  return (
    <header>
      <nav className="nav">
          <img src={Logo} className="logo-img" />
          <h3 className="logo-title">ReactFacts</h3>
          <h4 className="nav-sub">React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;
