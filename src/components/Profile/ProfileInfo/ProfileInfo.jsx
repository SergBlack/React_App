import React from "react";
import goblin from "../../../images/goblin.png";
import styles from "./ProfileInfo.module.css";
import lakes from "../../../images/ozera.jpg";

const ProfileInfo = props => {
  // debugger;
  return (
    <div>
      <div>
        <img className={styles.img} src={lakes} alt="something..." />
      </div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.ava}
          src={props.profile.photos.small}
          alt="Master goblin engineer"
        />
        AVA + description
      </div>
    </div>
  );
};

export default ProfileInfo;
