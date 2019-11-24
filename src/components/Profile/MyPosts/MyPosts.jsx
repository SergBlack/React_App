import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hey" />
      <Post message="Lets go" />
      <Post message="Busy now" />
    </div>
  );
};

export default MyPosts;
