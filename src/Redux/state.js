import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarUserOnline = sidebarReducer(
      this._state.sidebarUserOnline,
      action
    );
    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
