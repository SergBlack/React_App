import MyPosts from "./MyPosts";
import { addPost, updateNewPostText } from "./../../../Redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};

const MyPostContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText
})(MyPosts);

export default MyPostContainer;
