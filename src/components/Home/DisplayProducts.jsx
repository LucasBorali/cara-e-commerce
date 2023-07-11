import React, { useState } from 'react';
import classes from './DisplayProducts.module.css';
import ReactDOM from 'react-dom';
import ProductWindow from './ProductWindow';

const DisplayProducts = ({ title, description, products }) => {
  const [viewProduct, setViewProduct] = useState(null)


const showProductHandler = function(product){
  setViewProduct(product)
}

  return (
    <div className={classes['display-product']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={classes.container}>
        {products.map((product) => <div onClick={()=> showProductHandler(product)} key={product.img} className={classes.card}>
          <img src={product.img[0]} alt={product.name} />
          <p
            style={{
              fontSize: '0.8rem',
              textTransform: 'lowercase',
            }}
          >
            {product.brand}
          </p>
          <p
            style={{
              color: 'inherit',
              textAlign: 'left'
            }}
          >
            {product.name}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <p
            style={{
              color: '#3D827A',
            }}
          >
            ${product.price}
          </p>
          <button>
            <svg
              id="i-cart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#3D827A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
              <circle cx="25" cy="27" r="2" />
              <circle cx="12" cy="27" r="2" />
            </svg>
          </button>
          </div>
        </div>)}
      </div>
      {viewProduct !== null && ReactDOM.createPortal(
          <ProductWindow setViewProduct={setViewProduct} product={viewProduct}/>,
          document.getElementById('window-root')
        )}
    </div>
  );
};

export default DisplayProducts;
