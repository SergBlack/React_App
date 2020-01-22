import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "./../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 5642;
    }
    this.props.getUserProfile(userId);
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
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
};
let withUrlProfileContainer = withRouter(ProfileContainer);
let AuthRedirectComponent = withAuthRedirect(withUrlProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  AuthRedirectComponent
);
