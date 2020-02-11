import { createSelector } from "reselect";

const getUsersListSelector = state => {
  return state.usersPage.users;
};

export const getUsersList = createSelector(getUsersListSelector, users => users.filter(users => true));

export const getTotalUsersCount = state => {
  return state.usersPage.totalUsersCount;
};

export const getPageUsersCount = state => {
  return state.usersPage.pageUsersCount;
};

export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};

export const getIsLoading = state => {
  return state.usersPage.isLoading;
};

export const getFollowingUserId = state => {
  return state.usersPage.followingUserId;
};
