import React, { useState } from 'react';
import classes from './ProductWindow.module.css';

const ProductWindow = ({ product }) => {
  const [panel, setPanel] = useState(product.img[0]);

  const changePanellHandler = function (img) {
    setPanel(img);
  };

  console.log(product);
  return (
    <div className={classes['product-window']}>
      <div className={classes.display}>
        <img className={classes['big-panel']} src={panel} alt="" srcset="" />
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

      <div>
        <p>{product.brand}</p>
        <h1>{product.name}</h1>
        <h3>Product Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere perspiciatis eaque dolor pariatur dolore, distinctio nostrum veritatis assumenda quibusdam amet nemo voluptatibus eos aspernatur blanditiis, maxime nam ipsum ut.</p>
      </div>
    </div>
  );
};

export default ProductWindow;
