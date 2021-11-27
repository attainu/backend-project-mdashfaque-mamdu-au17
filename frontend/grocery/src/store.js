import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { userLoginReducer, userSignupReducer } from './reducers/userReducers';

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    // if delivery address is in the local storeage use it
    deliveryAddress: localStorage.getItem('deliveryAddress')
      ? JSON.parse(localStorage.getItem('deliveryAddress'))
      : {},
    paymentMethod: 'Cash on delivery',
  },
  userLogin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  orderCreate: orderCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
