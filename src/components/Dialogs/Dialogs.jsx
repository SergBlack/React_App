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

  let dialogsElements = dialogsData.map(el => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesData = [
    { id: 1, message: "Hey Dude!" },
    { id: 2, message: "Wazzaup!" },
    { id: 3, message: "Link me!" },
    { id: 4, message: "Wrong chat!" }
  ];

  let messagesElements = messagesData.map(el => {
    return <UserMessages messages={el.message} />;
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
