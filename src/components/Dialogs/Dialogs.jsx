import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UserMessages from "./UserMessages/UserMessages";

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(el => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.state.messagesData.map(el => {
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
