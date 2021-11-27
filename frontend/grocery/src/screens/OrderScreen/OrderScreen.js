import React from 'react';
import { Link } from 'react-router-dom';
function OrderScreen() {
  return (
    <div>
      <h1>Your order is placed</h1>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default OrderScreen;
