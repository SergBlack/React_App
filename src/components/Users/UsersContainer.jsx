import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  loadingInProgress,
  followingInProgress
} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.loadingInProgress(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageUsersCount)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.loadingInProgress(false);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setPage(pageNumber);
    this.props.loadingInProgress(true);
    userAPI.getUsers(pageNumber, this.props.pageUsersCount).then(data => {
      this.props.setUsers(data.items);
      this.props.loadingInProgress(false);
    });
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
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingUserId={this.props.followingUserId}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageUsersCount: state.usersPage.pageUsersCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingUserId: state.usersPage.followingUserId
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  loadingInProgress,
  followingInProgress
})(UsersContainer);
