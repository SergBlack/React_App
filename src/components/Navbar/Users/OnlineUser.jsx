import React from "react";
import styles from "./../Navbar.module.css";

const OnlineUser = props => {
  return (
    <div className={styles.userIcon}>
      {props.name} <br />
      Age: {props.age} <br />
      Sex: {props.sex}
    </div>
  );
};

export default OnlineUser;
