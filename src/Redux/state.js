let rerenderEntireTree = () => {
  console.log("state is changed");
};

let state = {
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
};

const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: "0"
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

//Функция доб. сообщения
const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

const updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

//observer (publisher-subscriber)
const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
export {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
  subscribe
};
