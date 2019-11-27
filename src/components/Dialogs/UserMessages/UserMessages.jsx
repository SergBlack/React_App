import React from "react";
import styles from "./../Dialogs.module.css";

const UserMessages = props => {
  return <div className={styles.userMessages}>{props.messages}</div>;
};
export default UserMessages;
