import React from 'react';
import classes from './CartItems.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItems = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items);

  const removeItemHandler = function (item) {
    dispatch(cartActions.removeItemFromCart(item))
    
  };

  return (
    <ul className={classes['cart-item']}>
      {cartItems.map(item => (
        <li key={item.name} className={classes['list-item']}>
          <img className={classes.image} src={item.img[0]} alt="product" />
          <div>
            <h4>{item.name}</h4>
            <p>
              {`$${item.price} x ${item.quantity}`}{' '}
              <span>{`$${(item.price * item.quantity).toFixed(2)}`}</span>
            </p>
          </div>
          <button onClick={() => removeItemHandler(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
