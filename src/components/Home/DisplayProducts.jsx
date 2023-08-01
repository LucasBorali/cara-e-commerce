import React from 'react';
import classes from './DisplayProducts.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { displayActions } from '../../store/display-slice';

const DisplayProducts = ({ title, description, products }) => {
  const dispatch = useDispatch();

  const showProductHandler = function (product) {
    dispatch(displayActions.productWindow(product));
  };

  return (
    <div className={classes['display-product']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className={classes.container}>
        {products.map(product => (
          <Link
          preventScrollReset={true}
            to={product.name.replace('- ', '').replaceAll(' ', '-')}
            key={product.name.replace('- ', '').replaceAll(' ', '-')}
          >
            <li
              onClick={() => showProductHandler(product)}
              className={classes.card}
            >
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
                  textAlign: 'left',
                }}
              >
                {product.name}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    color: 'var(--myrtle-green)',
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
                    <circle cx="25" cy="27" r="2" />
                    <circle cx="12" cy="27" r="2" />
                  </svg>
                </button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DisplayProducts;
