import React from "react";
import styles from "./ProfileInfo.module.css";
import lakes from "../../../images/ozera.jpg";

const ProfileInfo = props => {
  if (!props.profile) {
    return <></>;
  }
  return (
    <div>
      <div>
        <img className={styles.img} src={lakes} alt="something..." />
      </div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.ava}
          src={props.profile.photos.small}
          alt="User avatar"
        />
        <div>{`User ID: ${props.profile.userId}`}</div>
        <div>{`Name: ${props.profile.fullName}`}</div>
        <div>{`Looking for a job: ${props.profile.lookingForAJob}`}</div>
        <div>{`Description Job: ${props.profile.lookingForAJobDescription}`}</div>
        <div>
          <ul>
            Contacts:
            <li>{`Github: ${props.profile.github}`}</li>
            <li>{`VK: ${props.profile.vk}`}</li>
            <li>{`Facebook: ${props.profile.fcebook}`}</li>
            <li>{`Instagram: ${props.profile.instagram}`}</li>
            <li>{`Twitter: ${props.profile.twitter}`}</li>
            <li>{`Website: ${props.profile.website}`}</li>
            <li>{`Youtube: ${props.profile.youtube}`}</li>
            <li>{`MainLink: ${props.profile.mainLink}`}</li>
          </ul>
        </div>
        <div>
          Photos:{" "}
          <div>
            <img src={props.profile.photos.large} alt="User photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
