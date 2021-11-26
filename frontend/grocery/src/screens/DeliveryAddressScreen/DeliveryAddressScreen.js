import CheckoutSteps from '../../component/CheckoutSteps/CheckoutSteps';

import React, { useState } from 'react';
import './DeliveryAddressScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveDeliveryAddress } from '../../actions/cartActions';

function DeliveryAddressScreen(props) {
  // check if user is logged in if he is not logged in
  // redirect user to login page
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { deliveryAddress } = cart;

  if (!userInfo) {
    props.history.push('/login');
  }
  const [fullName, setFullName] = useState(deliveryAddress.fullName);
  const [address, setAddress] = useState(deliveryAddress.address);
  const [pincode, setPincode] = useState(deliveryAddress.pincode);
  const [city, setCity] = useState(deliveryAddress.city);
  const [mobileNumber, setMobileNumber] = useState(
    deliveryAddress.mobileNumber
  );

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveDeliveryAddress({ fullName, address, pincode, city, mobileNumber })
    );
    // redirect to payment screen
    props.history.push('/payment');
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Delivery Address</h1>
        </div>

        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Address (Area Street)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="PinCode">Pincode</label>
          <input
            type="text"
            id="pincode"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter City/District/Town"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Mobile Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
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

export default DeliveryAddressScreen;
