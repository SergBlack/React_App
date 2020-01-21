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
      let newMessageText = state.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 5, message: newMessageText }],
        newMessageText: ""
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText };
    }
    default:
      return state;
  }
};

export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateNewMessageText = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
