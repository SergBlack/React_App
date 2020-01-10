import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from "axios";
import { setUserProfile } from "./../../Redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/1542`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
