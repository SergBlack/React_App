import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hey", likesCount: "0" },
    { id: 2, message: "Lets go", likesCount: "10" },
    { id: 3, message: "Busy now", likesCount: "20" }
  ];

  let postsElements = postsData.map(el => {
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
      {/* <Post
        message={postsData[0].message}
        likesCount={postsData[0].likesCount}
      />
      <Post
        message={postsData[1].message}
        likesCount={postsData[1].likesCount}
      />
      <Post
        message={postsData[2].message}
        likesCount={postsData[2].likesCount}
      /> */}
    </div>
  );
};

export default MyPosts;
