import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
const THROW_AUTH_ERROR = 'THROW_AUTH_ERROR';
const SET_URL_CAPTCHA = 'SET_URL_CAPTCHA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  error: false,
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
        error: false,
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
    case THROW_AUTH_ERROR: {
      return {
        ...state,
        error: true
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

export const throwAuthError = () => {
  return {
    type: THROW_AUTH_ERROR
  };
};

export const setUrlCaptcha = url => {
  return {
    type: SET_URL_CAPTCHA,
    captchaUrl: url
  };
};

export const loginThunk = ({
  email,
  password,
  rememberMe,
  captcha
}) => dispatch => {
  authAPI.login(email, password, rememberMe, captcha).then(response => {
    if (response.resultCode === 0) {
      authAPI.me().then(response => {
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
    }
    if (response.resultCode === 1) {
      dispatch(throwAuthError());
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
