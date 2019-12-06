import React from "react";
import NavbarUsers from "./NavbarUsers";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    userList: state.sidebar.user
  };
};

const NavbarUsersContainer = connect(mapStateToProps)(NavbarUsers);

export default NavbarUsersContainer;
