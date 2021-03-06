import { userAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const LOADING_IN_PROGRESS = 'IS_LOADING_IN_PROGRESS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
  users: [],
  pageUsersCount: 10,
  pageBarCount: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingUserId: []
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follow: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follow: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case LOADING_IN_PROGRESS:
      return { ...state, isLoading: action.inProgress };
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingUserId: action.inProgress
          ? [...state.followingUserId, action.userId]
          : [...state.followingUserId.filter(id => id !== action.userId)]
      };
    default:
      return state;
  }
};

export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setPage = page => ({ type: SET_PAGE, currentPage: page });
export const setTotalUsersCount = totalCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalCount
});
export const loadingInProgress = bool => ({
  type: LOADING_IN_PROGRESS,
  inProgress: bool
});
export const followingInProgress = (bool, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  inProgress: bool,
  userId
});

export const getUsers = (currentPage, pageUsersCount) => dispatch => {
  dispatch(loadingInProgress(true));
  userAPI.getUsers(currentPage, pageUsersCount).then(data => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(loadingInProgress(false));
  });
};

export const setCurrentPage = (pageNumber, pageUsersCount) => dispatch => {
  dispatch(setPage(pageNumber));
  dispatch(loadingInProgress(true));
  userAPI.getUsers(pageNumber, pageUsersCount).then(data => {
    dispatch(setUsers(data.items));
    dispatch(loadingInProgress(false));
  });
};

export const follow = userId => dispatch => {
  dispatch(followingInProgress(true, userId));
  userAPI.follow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(followingInProgress(false, userId));
  });
};

export const unfollow = userId => dispatch => {
  dispatch(followingInProgress(true, userId));
  userAPI.unfollow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(followingInProgress(false, userId));
  });
};

export default usersReducer;
