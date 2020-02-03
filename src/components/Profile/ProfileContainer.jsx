import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getUserStatus,
  putUserStatus
} from './../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.id;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
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
    status: state.profilePage.status,
    id: state.auth.userId
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    putUserStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// export default compose(
//   connect(mapStateToProps, {
//     getUserProfile,
//     getUserStatus,
//     putUserStatus
//   }),
//   withRouter
// )(ProfileContainer);
