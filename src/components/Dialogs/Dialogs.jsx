import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UserMessages from "./UserMessages/UserMessages";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "./../../Redux/dialogs-reducer";

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map((el, index) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.state.messagesData.map((el, index) => {
    return <UserMessages messages={el.message} />;
  });

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let messageOnChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea
          onChange={messageOnChange}
          placeholder="Введите текст"
          value={props.state.newMessageText}
        ></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
