const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hey", likesCount: "0" },
    { id: 2, message: "Lets go", likesCount: "10" },
    { id: 3, message: "Busy now", likesCount: "20" }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: "0"
      };
      let copyState = { ...state };
      copyState.postsData = [...state.postsData];
      copyState.postsData.push(newPost);
      copyState.newPostText = "";
      return copyState;
    }
    case UPDATE_NEW_POST_TEXT: {
      let copyState = { ...state };
      copyState.newPostText = action.newText;
      return copyState;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
