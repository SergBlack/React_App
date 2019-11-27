import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(el => {
    return <Post id={el.id} message={el.message} likesCount={el.likesCount} />;
  });
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
