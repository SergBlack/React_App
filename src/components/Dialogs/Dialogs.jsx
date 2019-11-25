import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div>
        <div className={styles.userName}>Pasha</div>
        <div className={styles.userName}>Dasha</div>
        <div className={styles.userName}>Sasha</div>
        <div className={styles.userName}>Masha</div>
      </div>
      <div>
        <div className={styles.userMessages}>Hey Dude!</div>
        <div className={styles.userMessages}>Wazzaup!</div>
        <div className={styles.userMessages}>Link me!</div>
        <div className={styles.userMessages}>Wrong chat!</div>
      </div>
    </div>
  );
};

export default Dialogs;
