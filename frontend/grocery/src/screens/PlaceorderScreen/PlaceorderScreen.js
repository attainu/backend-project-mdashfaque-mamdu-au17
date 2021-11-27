import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../component/CheckoutSteps/CheckoutSteps';
function PlaceorderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }

  const fixIt = (num) => Number(num.toFixed(2)); // 6.123 => "6.12" => 6.12
  cart.itemsPrice = fixIt(
    cart.cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)
  );
  cart.deliveryCharge = cart.itemsPrice > 600 ? 0 : 30;
  cart.totalPrice = cart.itemsPrice + cart.deliveryCharge;

  const placeOrderHandler = () => {
    // Todo: dispatch place order action.
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping Details</h2>
                <p>
                  <strong>Name: </strong> {cart.deliveryAddress.fullName} <br />
                  <strong>Address: </strong> {cart.deliveryAddress.address}, ,{' '}
                  {cart.deliveryAddress.pincode}, {cart.deliveryAddress.city}{' '}
                  <br />
                  <strong>Mobile Number: </strong>
                  {cart.deliveryAddress.mobileNumber}
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method: </strong> {cart.paymentMethod}
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Your order List</h2>

                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <Link to={`/product/${item.product}`}>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="small"
                            ></img>
                          </Link>
                        </div>

                        <div className="product-name">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} X ₹{item.price} = ₹{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>

              <li>
                <di className="row">
                  <div>Product price</div>
                  <div>₹{cart.itemsPrice.toFixed(2)}</div>
                </di>
              </li>

              <li>
                <di className="row">
                  <div>Delivery Charge</div>
                  <div>₹{cart.deliveryCharge.toFixed(2)}</div>
                </di>
              </li>

              <li>
                <di className="row">
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>₹{cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </di>
              </li>

              {cart.cartItems.length > 0 ? (
                <li>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="primary block"
                  >
                    Place order
                  </button>
                </li>
              ) : (
                <div></div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceorderScreen;
