import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'Hey', likesCount: '0' },
    { id: 2, message: 'Lets go', likesCount: '10' },
    { id: 3, message: 'Busy now', likesCount: '20' }
  ],
  profile: null,
  status: 'initial value'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 4, message: action.post, likesCount: '0' }
        ]
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_USER_STATUS: {
      return action.status
        ? { ...state, status: action.status }
        : { ...state, status: 'no status' };
    }
    default:
      return state;
  }
};

export const addPost = post => ({ type: ADD_POST, post });
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const setUserStatus = status => ({ type: SET_USER_STATUS, status });

export const getUserProfile = userId => dispatch => {
  profileAPI.getUserProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserStatus = userId => dispatch => {
  profileAPI.getUserStatus(userId).then(response => {
    dispatch(setUserStatus(response.data));
  });
};

export const putUserStatus = status => dispatch => {
  profileAPI.setUserStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
