import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./Redux/state";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={store.addPost.bind(store)}
      updateNewPostText={store.updateNewPostText.bind(store)}
      addMessage={store.addMessage.bind(store)}
      updateNewMessageText={store.updateNewMessageText.bind(store)}
    />,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
