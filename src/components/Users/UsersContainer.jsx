import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow,
  unfollow,
  getUsers,
  setCurrentPage
} from '../../Redux/users-reducer';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';

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
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageUsersCount: state.usersPage.pageUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingUserId: state.usersPage.followingUserId,
    pageBarCount: state.usersPage.pageBarCount
  };
};

// export default compose(
//   connect(mapStateToProps, {
//     follow,
//     unfollow,
//     getUsers,
//     setCurrentPage
//   }),
//   withAuthRedirect
// )(UsersContainer);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    setCurrentPage
  })
)(UsersContainer);
