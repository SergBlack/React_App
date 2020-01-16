import React from "react";
import styles from "./Users.module.css";
import logo from "./../../images/logo.png";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersCount);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(page => {
          return (
            <span
              className={props.currentPage === page && styles.selected}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id} className={styles.userBox}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small === null ? logo : u.photos.small}
                  alt="ava"
                  className={styles.avatar}
                />
              </NavLink>
            </div>
            <div>
              {u.follow ? (
                <button
                  disabled={props.followingUserId.some(id => id === u.id)}
                  onClick={() => {
                    props.followingInProgress(true, u.id);
                    userAPI.unfollow(u.id).then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.followingInProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingUserId.some(id => id === u.id)}
                  onClick={() => {
                    props.followingInProgress(true, u.id);
                    userAPI.follow(u.id).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.followingInProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>ID:{u.id}</div>
              <div>Status: {!u.status ? "Very busy" : u.status}</div>
            </span>
            <span>
              <div>City</div>
              <div></div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
