import React from "react";
import styles from "./Users.module.css";
import logo from "./../../images/logo.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
        <div key={u.id}>
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
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            API_KEY: "0d41121f-2478-4b6c-b97e-27aac409dbbd"
                          }
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            API_KEY: "0d41121f-2478-4b6c-b97e-27aac409dbbd"
                          }
                        }
                      )
                      .then(response => {
                        props.follow(u.id);
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
              <div>Status: "{u.status}"</div>
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
