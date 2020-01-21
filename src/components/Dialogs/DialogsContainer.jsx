import Dialogs from "./Dialogs";
import { addMessage, updateNewMessageText } from "./../../Redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessage());
    },
    messageOnChange: text => {
      dispatch(updateNewMessageText(text));
    }
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
