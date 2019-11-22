import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navItem">
        <a>Profile</a>
      </div>
      <div className="navItem">
        <a>Messages</a>
      </div>
      <div className="navItem">
        <a>News</a>
      </div>
      <div className="navItem">
        <a>Music</a>
      </div>
      <div className="navItem">
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
