import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartActions';
import CheckoutSteps from '../../component/CheckoutSteps/CheckoutSteps';
import './PaymentMethodScreen.css';

function PaymentMethodScreen(props) {
  // user should see payment screen if he entered shipping information if he didn't he should be redirected to shipping screen
  const cart = useSelector((state) => state.cart);
  const { deliveryAddress } = cart;
  if (!deliveryAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
          <div className="alert-message">
            We are experiencing payment failures please select cash on delivery
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="cashondelivery"
              value="cashondelivery"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">Cash on delivery</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodScreen;
