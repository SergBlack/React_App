import React from "react";
import ozera from "../images/ozera.jpg";
import goblin from "../images/goblin.png";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src={ozera} alt="something..." />
      </div>
      <div className="ava">
        <img src={goblin} alt="Master goblin engineer" />
        AVA + description
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
