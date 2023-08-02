import React, { useEffect, useState } from 'react';
import b1 from '../../Assets/banner/b1.jpg';
import Banner from '../Home/Banner';
import classes from './Shop.module.css';
import DisplayProducts from '../Home/DisplayProducts';
import Loading from '../Loading';

const Shop = ({ setWindow }) => {
  const [fetchedProducts, setfetchedProducts] = useState(false);
  window.scrollTo(0, 0);

  const fetchProducts = async () => {
    const response = await fetch(
      'https://cara-e-commerce-default-rtdb.firebaseio.com/commerce-products.json'
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchProducts().then(data =>
      setfetchedProducts([...data.summerItems, ...data.newArrivals])
    );
  }, []);

  return (
    <section className={classes.shop}>
      <Banner banner={b1}>
        <h1>#stayhome</h1>
        <p>Save more with coupons & up to 70% off!</p>
      </Banner>

      {fetchedProducts ? (
        <DisplayProducts setWindow={setWindow} products={fetchedProducts} />
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Shop;
