import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(el => {
    return <Post id={el.id} message={el.message} likesCount={el.likesCount} />;
  });

  let newRef = React.createRef();

  let addPost = () => {
    let text = newRef.current.value;
    alert(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newRef}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
