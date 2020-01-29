import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userId: action.userId,
        isAuth: true
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = userId => ({
  type: SET_USER_DATA,
  userId: userId
});

export const loginThunk = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.userId));
    }
  });
};
export default authReducer;
