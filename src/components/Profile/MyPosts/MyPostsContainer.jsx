import MyPosts from './MyPosts';
import { addPost, updateNewPostText } from './../../../Redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return {
    posts: state.profilePage.postsData
  };
};

const MyPostContainer = connect(mapStateToProps, {
  addPost
})(MyPosts);

export default MyPostContainer;
