import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// let postsData = [
//   { id: 1, message: "Hey", likesCount: "0" },
//   { id: 2, message: "Lets go", likesCount: "10" },
//   { id: 3, message: "Busy now", likesCount: "20" }
// ];

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
