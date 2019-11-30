import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./Redux/state";

const rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;
