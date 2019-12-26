const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";

let initialState = {
  users: [],
  pageUsersCount: 5,
  totalUsersCount: 0,
  currentPage: 1
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
      debugger;
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setPageAC = page => ({ type: SET_PAGE, currentPage: page });

export default usersReducer;
