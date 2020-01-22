import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UserMessages from "./UserMessages/UserMessages";

const Dialogs = props => {
  let dialogsElements = props.dialogsData.map((el, index) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.messagesData.map((el, index) => {
    return <UserMessages messages={el.message} />;
  });

  let addMessage = () => {
    props.addMessage();
  };

  let messageOnChange = e => {
    let text = e.target.value;
    props.messageOnChange(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea
          onChange={messageOnChange}
          placeholder="Введите текст"
          value={props.newMessageText}
        ></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
