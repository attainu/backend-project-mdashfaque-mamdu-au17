import {
  USER_LOGIIN_FAIL,
  USER_LOGIIN_REQUEST,
  USER_LOGIIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

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
