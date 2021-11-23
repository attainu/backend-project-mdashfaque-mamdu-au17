import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import MessageBox from '../../component/MessageBox/MessageBox';
import './cartScreen.css';

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromHandler = (id) => {
    //delete action
  };

  const checkOutHandler = () => {
    props.history.push('/signin');
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart({cartItems.length})</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Shop Now</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
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

                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>

                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>₹{item.price}</div>

                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromHandler(item.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cartItems.length > 0 ? (
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>
                  Subtotal : ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)}{' '}
                  items) : ₹
                  {cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)}
                </h2>
              </li>

              <li>
                <button
                  type="button"
                  onClick={checkOutHandler}
                  className="primary block"
                >
                  Proceed to checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CartScreen;
