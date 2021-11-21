import React from 'react';
import './Product.css';

function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <div className="price">
          <span>₹</span>
          {product.price}
        </div>
      </div>
    </div>
  );
}

export default Product;