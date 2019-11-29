import React from "react";
import styles from "./../Navbar.module.css";
import OnlineUser from "./OnlineUser";

const NavbarUsers = props => {
  let onlineUserList = props.user.map((el, index) => {
    if (index < 3) {
      return <OnlineUser name={el.name} />;
    }
  });
  return (
    <div>
      <div>Friends</div>
      <div className={styles.usersIcons}>{onlineUserList}</div>
    </div>
  );
};

export default NavbarUsers;
