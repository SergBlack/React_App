import Dialogs from './Dialogs';
import { addMessage } from './../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = state => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

// export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
