import React from "react";
import styles from "./../Navbar.module.css";
import OnlineUser from "./OnlineUser";

const NavbarUsers = props => {
  let onlineUser = props.user.map(el => {
    return <OnlineUser name={el.name} age={el.age} sex={el.sex} />;
  });
  return (
    <div>
      <div>Friends</div>
      <div>{onlineUser}</div>
    </div>
  );
};

export default NavbarUsers;
