import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setPageAC,
  setTotalUsersCountAC,
  inProgressAC
} from "../../Redux/users-reducer";
import preloader from "../../images/preloader.svg";

class UsersContainer extends React.Component {
  componentDidMount() {
    // if (this.props.users.length === 0) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersCount}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
    // }
  }

  onPageChanged = pageNumber => {
    this.props.setPage(pageNumber);
    this.props.inProgress(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageUsersCount}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.inProgress(false);
      });
  };

  render() {
    return (
      <>
        {this.props.inProgress ? <img src={preloader} /> : null}
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
    inProgress: state.usersPage.inProgress
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setPage: page => {
      dispatch(setPageAC(page));
    },
    setTotalUsersCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    inProgress: loading => {
      dispatch(inProgressAC(loading));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
