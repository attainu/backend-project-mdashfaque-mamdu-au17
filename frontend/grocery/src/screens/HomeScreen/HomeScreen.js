import React from 'react';
import Product from '../../component/Product/Product';
import data from '../../data';
function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
