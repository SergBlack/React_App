import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  updateNewMessageText,
  addMessage
} from "./Redux/state";

const rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;
