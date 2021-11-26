import React from 'react';
import './CheckoutSteps.css';

function CheckoutSteps(props) {
  return (
    <div>
      <div className="row checkout-steps">
        <div className={props.step1 ? 'active' : ''}>Log In</div>

        <div className={props.step2 ? 'active' : ''}>Delivery Address</div>

        <div className={props.step3 ? 'active' : ''}>Payment</div>

        <div className={props.step4 ? 'active' : ''}>Place Order</div>
      </div>
    </div>
  );
}

export default CheckoutSteps;
