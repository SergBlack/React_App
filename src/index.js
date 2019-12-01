import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./Redux/state";
import {
  addPost,
  updateNewPostText,
  updateNewMessageText,
  addMessage,
  subscribe
} from "./Redux/state";

let rerenderEntireTree = state => {
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
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
