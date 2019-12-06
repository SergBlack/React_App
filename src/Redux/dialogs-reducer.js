const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    { id: 1, message: "Hey Dude!" },
    { id: 2, message: "Wazzaup!" },
    { id: 3, message: "Link me!" },
    { id: 4, message: "Wrong chat!" }
  ],
  dialogsData: [
    { id: 1, name: "Pasha" },
    { id: 2, name: "Dasha" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Masha" }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };
      let copyState = { ...state };
      copyState.messagesData = [...state.messagesData];
      copyState.messagesData.push(newMessage);
      copyState.newMessageText = "";
      return copyState;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let copyState = { ...state };
      copyState.newMessageText = action.newText;
      return copyState;
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
