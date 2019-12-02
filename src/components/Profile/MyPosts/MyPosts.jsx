import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "./../../../Redux/state";

const MyPosts = props => {
  let postsElements = props.posts.map((el, index) => {
    return <Post id={el.id} message={el.message} likesCount={el.likesCount} />;
  });

  let newRef = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newRef.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newRef}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
