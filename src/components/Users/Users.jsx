import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import logo from "./../../images/logo.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={logo} alt="ava" className={styles.avatar} />
              </div>
              <div>
                {u.follow ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
