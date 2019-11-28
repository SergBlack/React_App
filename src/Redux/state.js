let state = {
  //to Dialogs
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

  //to Profile
  profilePage: {
    postsData: [
      { id: 1, message: "Hey", likesCount: "0" },
      { id: 2, message: "Lets go", likesCount: "10" },
      { id: 3, message: "Busy now", likesCount: "20" }
    ]
  }
};

export default state;
