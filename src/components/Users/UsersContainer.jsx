import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  getUsers,
  setCurrentPage
} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { withAuthRedirect } from "../HOC/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageUsersCount);
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber, this.props.pageUsersCount);
  };

  render() {
    return (
      <>
        <Preloader isLoading={this.props.isLoading} />
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageUsersCount={this.props.pageUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingUserId={this.props.followingUserId}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageUsersCount: state.usersPage.pageUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingUserId: state.usersPage.followingUserId,
    isAuth: state.auth.isAuth
  };
};

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
  setCurrentPage
})(AuthRedirectComponent);
