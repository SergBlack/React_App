import React from "react";
import styles from "./Users.module.css";

const Users = props => {
  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="ava" className={styles.avatar} />
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
              <div>
                {u.firstname} {u.secondname}
              </div>
              <div>Status: "{u.status}"</div>
            </span>
            <span>
              <div>
                {u.location.city}, {u.location.country}
              </div>
              <div></div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
