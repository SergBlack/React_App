import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <Post message="Hey" />
      <Post message="Lets go" />
      <Post message="Busy now" />
    </div>
  );
};

export default MyPosts;
