import React from "react";
import styles from "./../Navbar.module.css";

const OnlineUser = props => {
  return <div className={styles.userIcon}>{props.name}</div>;
};

export default OnlineUser;
