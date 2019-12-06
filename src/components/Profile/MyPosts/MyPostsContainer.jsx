import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "./../../../Redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: text => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  };
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
