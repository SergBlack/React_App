import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessageText
} from "./../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
