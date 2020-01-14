import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  isLoadingInProgress
} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isLoadingInProgress(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageUsersCount)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.isLoadingInProgress(false);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setPage(pageNumber);
    this.props.isLoadingInProgress(true);
    userAPI.getUsers(pageNumber, this.props.pageUsersCount).then(data => {
      this.props.setUsers(data.items);
      this.props.isLoadingInProgress(false);
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
    isLoading: state.usersPage.isLoading
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  isLoadingInProgress
})(UsersContainer);
