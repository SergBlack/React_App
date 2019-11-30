import rerenderEntireTree from "./../render";

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
    ]
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

let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: "0"
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

let updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
export { addPost, updateNewPostText };
