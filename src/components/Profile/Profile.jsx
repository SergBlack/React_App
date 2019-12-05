import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import lakes from "../../images/ozera.jpg";

const Profile = props => {
  return (
    <div>
      <div>
        <img className={styles.img} src={lakes} alt="something..." />
      </div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
