import React from 'react';
import b1 from '../../Assets/banner/b1.jpg';
import Banner from '../Home/Banner';
import classes from './Shop.module.css';
import DisplayProducts from '../Home/DisplayProducts';
import { summerItems, newArrivals } from '../../Assets/products/products';

const Shop = () => {
  const products = [...summerItems, ...newArrivals];

  return (
    <section className={classes.shop}>
      <Banner banner={b1}>
        <h1 style={{ color: '#fff' }}>#stayhome</h1>
        <p style={{ color: '#fff' }}>Save more with coupons & up to 70% off!</p>
      </Banner>
      <DisplayProducts products={products} />
    </section>
  );
};

export default Shop;
