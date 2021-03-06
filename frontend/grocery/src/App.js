import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { logout } from './actions/userActions';
import CartScreen from './screens/CartScreen/CartScreen';
import DeliveryAddressScreen from './screens/DeliveryAddressScreen/DeliveryAddressScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import OrderScreen from './screens/OrderScreen/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen/PaymentMethodScreen';
import PlaceorderScreen from './screens/PlaceorderScreen/PlaceorderScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              GroceryBazar
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="cart-item-count">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">{userInfo.name}</Link>
                <ul className="dropdown-content">
                  <Link to="#logout" onClick={logoutHandler}>
                    Log Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </div>
        </header>
    
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/signup" component={SignUpScreen}></Route>
          <Route path="/shipping" component={DeliveryAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceorderScreen}></Route>
          <Route path={`/order`} component={OrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

