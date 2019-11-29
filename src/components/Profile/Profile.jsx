import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

import ozera from "../../images/ozera.jpg";

const Profile = props => {
  return (
    <div>
      <div>
        <img className={styles.img} src={ozera} alt="something..." />
      </div>
      <ProfileInfo />
      <MyPosts posts={props.state.postsData} />
    </div>
  );
};

export default Profile;
