import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map((el, index) => {
    return <Post id={el.id} message={el.message} likesCount={el.likesCount} />;
  });

  let newRef = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch({ type: "ADD-POST" });
  };
  let onPostChange = () => {
    let text = newRef.current.value;
    //props.updateNewPostText(text);
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
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
