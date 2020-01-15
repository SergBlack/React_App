import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "./../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { userAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 5642;
    }
    userAPI.getUserProfile(userId).then(data => {
      this.props.setUserProfile(data);
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
let withUrlProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  withUrlProfileContainer
);
