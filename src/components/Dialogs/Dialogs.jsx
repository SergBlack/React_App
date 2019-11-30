import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UserMessages from "./UserMessages/UserMessages";

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map((el, index) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.state.messagesData.map((el, index) => {
    return <UserMessages messages={el.message} />;
  });

  //Иниц ссылки
  let newRef = React.createRef();

  //Функция доб. сообщения
  let addMessage = () => {
    let text = newRef.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        {/* привязка textarea к ссылке */}
        <textarea ref={newRef}></textarea>
      </div>
      <div>
        {/*клик мышки вызывает addMessage */}
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
