import React from "react";
import styles from "./Users.module.css";
import logo from "./../../images/logo.png";
import { NavLink } from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

const Users = props => {
  return (
    <div>
      <Paginator {...props} />
      {props.users.map(u => (
        <div key={u.id} className={styles.userBox}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small === null ? logo : u.photos.small} alt="ava" className={styles.avatar} />
              </NavLink>
            </div>
            <div>
              {u.follow ? (
                <button
                  disabled={props.followingUserId.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                  <button
                    disabled={props.followingUserId.some(id => id === u.id)}
                    onClick={() => {
                      props.follow(u.id);
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
              <div>Status: {!u.status ? "" : u.status}</div>
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
