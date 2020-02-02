import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import UserMessages from "./UserMessages/UserMessages";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../Common/FormControls/Textarea";
import { maxLength } from "../Utilities/validators";

const maxLength200 = maxLength(200);

const Dialogs = props => {
  let dialogsElements = props.dialogsData.map((el, index) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.messagesData.map((el, index) => {
    return <UserMessages messages={el.message} />;
  });

  const submit = message => {
    props.addMessage(message.addMessage);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.usersName}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={submit} />
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"addMessage"} type={"text"} label={"Введите текст"} validate={[maxLength200]} />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "addMessage" })(AddMessageForm);

export default Dialogs;
