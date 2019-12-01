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
        { name: "Lenin", age: 33, sex: "male" },
        { name: "Lara", age: 23, sex: "female" },
        { name: "Pushkin", age: 66, sex: "male" },
        { name: "show max 3 user online" },
        { name: "show max 3 user online" }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: "0"
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store;
