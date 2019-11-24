import React from "react";
import ozera from "../../images/ozera.jpg";
import goblin from "../../images/goblin.png";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={styles.content}>
        <img className={styles.img} src={ozera} alt="something..." />
      </div>
      <div>
        <img className={styles.ava} src={goblin} alt="Master goblin engineer" />
        AVA + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
