import React from 'react';
import b1 from '../../Assets/banner/b1.jpg';
import Banner from '../Home/Banner';
import classes from './Shop.module.css';
import DisplayProducts from '../Home/DisplayProducts';
import { summerItems, newArrivals } from '../../Assets/products/products';

const Shop = ({ cart, setWindow }) => {
  const products = [...summerItems, ...newArrivals];

  return (
    <section className={classes.shop}>
      <Banner banner={b1}>
        <h1>#stayhome</h1>
        <p>Save more with coupons & up to 70% off!</p>
      </Banner>
      <DisplayProducts setWindow={setWindow} cart={cart} products={products} />
    </section>
  );
};

export default Shop;
