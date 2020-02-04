import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
const SET_URL_CAPTCHA = 'SET_URL_CAPTCHA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: true,
        captchaUrl: null
      };
    }
    case REMOVE_USER_DATA: {
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        captchaUrl: null
      };
    }
    case SET_URL_CAPTCHA: {
      return {
        ...state,
        captchaUrl: action.captchaUrl
      };
    }
    default:
      return state;
  }
};

const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  userId: id,
  email: email,
  login: login
});

const removeAuthUserData = () => {
  return {
    type: REMOVE_USER_DATA
  };
};

const setUrlCaptcha = url => {
  return {
    type: SET_URL_CAPTCHA,
    captchaUrl: url
  };
};

export const authMeThunk = () => dispatch => {
  return authAPI.me().then(response => {
    if (response.resultCode === 0) {
      dispatch(
        setAuthUserData(
          response.data.id,
          response.data.email,
          response.data.login
        )
      );
    }
  });
};

export const loginThunk = ({
  email,
  password,
  rememberMe,
  captcha
}) => dispatch => {
  authAPI.login(email, password, rememberMe, captcha).then(response => {
    if (response.resultCode === 0) {
      dispatch(authMeThunk());
    }
    if (response.resultCode === 1) {
      if (response.messages.length > 0) {
        const message = 'Invalid login or password';
        dispatch(stopSubmit('login', { _error: message }));
      }
    }
    if (response.resultCode === 10) {
      authAPI.getCaptchaUrl().then(response => {
        dispatch(setUrlCaptcha(response.url));
      });
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
