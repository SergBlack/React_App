import React from 'react';
import styles from './ProfileInfo.module.css';
import lakes from '../../../images/ozera.jpg';
import ProfileStatus from './ProfileStatus';
import logo from '../../../images/logo.png';

const ProfileInfo = props => {
  if (!props.profile) {
    return <></>;
  }

  const onLoadingPhoto = (file) => {

  }

  return (
    <div>
      <div>
        <img className={styles.img} src={lakes} alt="something..." />
      </div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.ava}
          src={props.profile.photos.small === null ? logo : props.profile.photos.small}
          alt="User avatar"
        />
        {props.isOwner ? null : <input type={"file"} onChange={onLoadingPhoto}/>}

        <div>{`User ID: ${props.profile.userId}`}</div>
        <div>{`Name: ${props.profile.fullName}`}</div>
        <div>{`Looking for a job: ${props.profile.lookingForAJob}`}</div>
        <ProfileStatus
          status={props.status}
          putUserStatus={props.putUserStatus}
        />
        <div>{`Description Job: ${props.profile.lookingForAJobDescription}`}</div>
        <div>
          <ul>
            Contacts:
            <li>{`Github: ${props.profile.contacts.github}`}</li>
            <li>{`VK: ${props.profile.contacts.vk}`}</li>
            <li>{`Facebook: ${props.profile.contacts.facebook}`}</li>
            <li>{`Instagram: ${props.profile.contacts.instagram}`}</li>
            <li>{`Twitter: ${props.profile.contacts.twitter}`}</li>
            <li>{`Website: ${props.profile.contacts.website}`}</li>
            <li>{`Youtube: ${props.profile.contacts.youtube}`}</li>
            <li>{`MainLink: ${props.profile.contacts.mainLink}`}</li>
          </ul>
        </div>
        <div>
          Photos:{' '}
          <div>
            <img src={props.profile.photos.large} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
