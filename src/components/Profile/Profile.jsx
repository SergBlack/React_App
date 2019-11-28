import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.postsData} />
    </div>
  );
};

export default Profile;
