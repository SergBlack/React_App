const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    dialogsPage: {
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
    },

    profilePage: {
      postsData: [
        { id: 1, message: "Hey", likesCount: "0" },
        { id: 2, message: "Lets go", likesCount: "10" },
        { id: 3, message: "Busy now", likesCount: "20" }
      ],
      newPostText: ""
    },

    sidebarUserOnline: {
      user: [
        { name: "Penin", age: 33, sex: "male" },
        { name: "Lara", age: 23, sex: "female" },
        { name: "Pushkin", age: 66, sex: "male" },
        { name: "show max 3 user online" },
        { name: "show max 3 user online" }
      ]
    }
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: "0"
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default store;
window.store = store;
