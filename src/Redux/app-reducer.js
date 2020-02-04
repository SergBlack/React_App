import { authMeThunk } from './auth-reducer';

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY';

let initialState = { initialized: false };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY: {
      return {
        ...state,
        initialized: true
      };
    }
    default:
      return state;
  }
};

export const initializedSuccessfully = () => ({
  type: INITIALIZED_SUCCESSFULLY
});

export const initializedApp = () => dispatch => {
  let promise = dispatch(authMeThunk());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccessfully());
  });
};

export default appReducer;
