import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, getUsers, setCurrentPage } from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUsersList,
  getTotalUsersCount,
  getPageUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowingUserId
} from "../Utilities/selectors";

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
          pageBarCount={this.props.pageBarCount}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: getUsersList(state),
    totalUsersCount: getTotalUsersCount(state),
    pageUsersCount: getPageUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingUserId: getFollowingUserId(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    setCurrentPage
  })
)(UsersContainer);
