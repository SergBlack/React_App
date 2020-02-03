import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
const THROW_AUTH_ERROR = 'THROW_AUTH_ERROR';
const SET_URL_CAPTCHA = 'SET_URL_CAPTCHA';
const REQUEST_IN_PROCESS = 'REQUEST_IN_PROCESS';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  error: false,
  captchaUrl: null,
  requestInProcess: false
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
        error: action.error
      };
    }
    case SET_URL_CAPTCHA: {
      return {
        ...state,
        captchaUrl: action.captchaUrl
      };
    }
    case REQUEST_IN_PROCESS: {
      return {
        ...state,
        requestInProcess: action.requestInProcess
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

const throwAuthError = bool => {
  return {
    type: THROW_AUTH_ERROR,
    error: bool
  };
};

const setUrlCaptcha = url => {
  return {
    type: SET_URL_CAPTCHA,
    captchaUrl: url
  };
};

const requestToApiInProcess = bool => {
  return {
    type: REQUEST_IN_PROCESS,
    requestInProcess: bool
  };
};

export const loginThunk = ({
  email,
  password,
  rememberMe,
  captcha
}) => dispatch => {
  authAPI.login(email, password, rememberMe, captcha).then(response => {
    dispatch(requestToApiInProcess(true));
    dispatch(throwAuthError(false));
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
      dispatch(throwAuthError(true));
    }
    if (response.resultCode === 10) {
      authAPI.getCaptchaUrl().then(response => {
        dispatch(setUrlCaptcha(response.url));
      });
    }
    dispatch(requestToApiInProcess(false));
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
