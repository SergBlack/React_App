import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

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
        email: action.email,
        isAuth: true
      };
    }
    case REMOVE_USER_DATA: {
      return {
        ...state,
        userId: null,
        email: null,
        isAuth: false
      };
    }
    default:
      return state;
  }
};

const setAuthUserData = (userId, email) => ({
  type: SET_USER_DATA,
  userId: userId,
  email: email
});

const removeAuthUserData = () => {
  return {
    type: REMOVE_USER_DATA
  };
};

export const loginThunk = ({ email, password, rememberMe }) => dispatch => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(response.data.userId, email));
    }
  });
};

export const logoutThunk = () => dispatch => {
  authAPI.logout().then(response => {
    if (response.resultCode === 0) {
      dispatch(removeAuthUserData());
    }
  });
};

export default authReducer;
