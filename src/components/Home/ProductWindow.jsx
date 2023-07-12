import React, { useState } from 'react';
import classes from './ProductWindow.module.css';

const ProductWindow = ({ product, setViewProduct, cart }) => {
  const [panel, setPanel] = useState(product.img[0]);
  const [quantity, setQuantity] = useState(1);

  const changePanellHandler = function (img) {
    setPanel(img);
  };

  const returnHandler = function () {
    setViewProduct(null);
  };

  const decreaseHandler = function () {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
    } else {
      return;
    }
  };

  const increaseHandler = function () {
    setQuantity(prevState => prevState + 1);
  };

  const addCartHandler = function () {
    const size = document.getElementById('size');
    const item = {
      ...product,
      quantity: quantity,
      size: size.value,
    };
    cart.push(item);
  };

  return (
    <div className={classes['product-window']}>
      <button onClick={returnHandler} className={classes.btn}>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
            fill="#585555"
          />
        </svg>
      </button>
      <div className={classes.display}>
        <img className={classes['big-panel']} src={panel} alt="" srcSet="" />
        <ul>
          {product.img.map(img => (
            <li
              onClick={() => {
                changePanellHandler(img);
              }}
              key={img}
            >
              <img src={img} alt={img} />
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.description}>
        <p>{product.brand}</p>
        <h1>{product.name}</h1>
        <h3>${product.price * quantity}</h3>
        <select name="size" id="size">
          <option>Select Size</option>
          <option>X</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <div className={classes.buying}>
          <div>
            <button onClick={decreaseHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <p>{quantity}</p>
            <button onClick={increaseHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
               
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <button onClick={addCartHandler}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
              />
            </svg>
            Add to cart
          </button>
        </div>
        <h3>Product Details</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere
          perspiciatis eaque dolor pariatur dolore, distinctio nostrum veritatis
          assumenda quibusdam amet nemo voluptatibus eos aspernatur blanditiis,
          maxime nam ipsum ut.
        </p>
      </div>
    </div>
  );
};

export default ProductWindow;
