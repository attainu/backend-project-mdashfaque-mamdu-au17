import {
  USER_LOGIIN_FAIL,
  USER_LOGIIN_REQUEST,
  USER_LOGIIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants';

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { laoding: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIIN_REQUEST:
      return { loading: true };
    case USER_LOGIIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIIN_FAIL:
      return { laoding: false, error: action.payload };
    // remove data from userInfo
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
