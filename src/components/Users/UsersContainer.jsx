import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setPageAC,
  setTotalUsersCountAC
} from "../../Redux/users-reducer";

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageUsersCount: state.usersPage.pageUsersCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    setTotalUsersCount: usersNumber => {
      dispatch(setTotalUsersCountAC(usersNumber));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
