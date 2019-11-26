import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const UserMessages = props => {
  return <div className={styles.userMessages}>{props.messages}</div>;
};

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>
        <DialogItem name="Pasha" id="1" />
        <DialogItem name="Dasha" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Masha" id="4" />
      </div>
      <div className={styles.messages}>
        <UserMessages messages="Hey Dude!" />
        <UserMessages messages="Wazzaup!" />
        <UserMessages messages="Link me!" />
        <UserMessages messages="Wrong chat!" />
      </div>
    </div>
  );
};

export default Dialogs;
