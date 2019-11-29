import React from "react";
import goblin from "../../../images/goblin.png";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img className={styles.ava} src={goblin} alt="Master goblin engineer" />
        AVA + description
      </div>
    </div>
  );
};

export default ProfileInfo;
