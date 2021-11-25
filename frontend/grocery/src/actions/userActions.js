import Axios from 'axios';
import {
  USER_LOGIIN_FAIL,
  USER_LOGIIN_REQUEST,
  USER_LOGIIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIIN_REQUEST, payload: { email, password } });

  try {
    const { data } = await Axios.post('/api/users/signin', { email, password });
    dispatch({ type: USER_LOGIIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  // localStorage.removeItem('cartItems');
  dispatch({ type: USER_LOGOUT });
};
