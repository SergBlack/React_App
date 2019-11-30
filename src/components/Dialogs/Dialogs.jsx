import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UserMessages from "./UserMessages/UserMessages";

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.dialogsData.map((el, index) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.dialogsPage.messagesData.map((el, index) => {
    return <UserMessages messages={el.message} />;
  });

  //Иниц ссылки
  let newRef = React.createRef();

  let messageOnChange = () => {
    let text = newRef.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        {/* привязка textarea к ссылке */}
        <textarea
          onChange={messageOnChange}
          ref={newRef}
          value={props.dialogsPage.newMessageText}
        ></textarea>
      </div>
      <div>
        {/*клик мышки вызывает addMessage */}
        <button onClick={props.addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
