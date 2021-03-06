import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="price">
          <span>₹</span>
          {product.price}
        </div>
      </div>
    </div>
  );
}

export default Product;
