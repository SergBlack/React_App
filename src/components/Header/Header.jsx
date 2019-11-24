import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img className={styles.img} src={logo} alt="LOGO" />
        Fakebook
      </h1>
    </header>
  );
};

export default Header;
