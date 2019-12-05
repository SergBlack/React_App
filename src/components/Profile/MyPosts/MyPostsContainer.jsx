import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "./../../../Redux/profile-reducer";

const MyPostContainer = props => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = text => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
      addPost={addPost}
      updateNewPostText={onPostChange}
    />
  );
};

export default MyPostContainer;
