import React from "react";
import styles from "./../Navbar.module.css";
import OnlineUser from "./OnlineUser";

const NavbarUsers = props => {
  let state = props.store.getState();
  let onlineUserList = state.sidebar.user.map((el, index) => {
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
