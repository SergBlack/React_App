const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_LOADING_IN_PROGRESS = "IS_LOADING_IN_PROGRESS";

let initialState = {
  users: [],
  pageUsersCount: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false
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
    case IS_LOADING_IN_PROGRESS:
      return { ...state, isLoading: action.inProgress };
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setPage = page => ({ type: SET_PAGE, currentPage: page });
export const setTotalUsersCount = totalCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalCount
});
export const isLoadingInProgress = bool => ({
  type: IS_LOADING_IN_PROGRESS,
  inProgress: bool
});

export default usersReducer;
