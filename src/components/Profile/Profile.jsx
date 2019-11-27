import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
  let postsData = [
    { id: 1, message: "Hey", likesCount: "0" },
    { id: 2, message: "Lets go", likesCount: "10" },
    { id: 3, message: "Busy now", likesCount: "20" }
  ];
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={postsData} />
    </div>
  );
};

export default Profile;
