import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        putUserStatus={props.putUserStatus}
        isOwner={props.isOwner}
        uploadPhoto={props.uploadPhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
