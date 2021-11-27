import React from 'react';
import './OrderScreen.css'
import { Link } from 'react-router-dom';
function OrderScreen() {
  return (
    <div className='container'>
        
      <h1>Your order is placed</h1>
      <button><Link to="/">Continue Shopping</Link></button>
            
        
    </div>
  );
}

export default OrderScreen;