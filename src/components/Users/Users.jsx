import React from "react";
import styles from "./Users.module.css";
import logo from "./../../images/logo.png";

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
              <img
                src={u.photos.small === null ? logo : u.photos.small}
                alt="ava"
                className={styles.avatar}
              />
            </div>
            <div>
              {u.follow ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
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