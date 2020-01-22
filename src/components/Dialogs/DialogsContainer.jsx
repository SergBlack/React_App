import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessageText
} from "./../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
