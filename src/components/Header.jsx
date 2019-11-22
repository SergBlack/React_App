import React from "react";
import logo from "../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="LOGO" />
        Fakebook
      </h1>
    </header>
  );
};

export default Header;
