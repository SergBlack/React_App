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
  let dialogsData = [
    { id: 1, name: "Pasha" },
    { id: 2, name: "Dasha" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Masha" }
  ];

  let messsagesData = [
    { id: 1, message: "Hey Dude!" },
    { id: 2, message: "Wazzaup!" },
    { id: 3, message: "Link me!" },
    { id: 4, message: "Wrong chat!" }
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={styles.messages}>
        <UserMessages messages={messsagesData[0].message} />
        <UserMessages messages={messsagesData[1].message} />
        <UserMessages messages={messsagesData[2].message} />
        <UserMessages messages={messsagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
