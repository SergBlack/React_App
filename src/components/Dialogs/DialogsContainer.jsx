import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "./../../Redux/dialogs-reducer";

let DialogsContainer = props => {
  let state = props.store.getState();
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let messageOnChange = text => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      addMessage={addMessage}
      messageOnChange={messageOnChange}
      dialogsData={state.dialogsPage.dialogsData}
      messagesData={state.dialogsPage.messagesData}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
