import '../App.css';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import { summerItems, newArrivals } from '../Assets/products/products';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from '../store/cart-actions';

let isInitial = true;

function HomePage() {
  const dispatch = useDispatch();
  const [window, setWindow] = useState('Home');
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      <Navbar setWindow={setWindow} />
      <Home
        setWindow={[setWindow, window]}
        products={[summerItems, newArrivals]}
      />
    </div>
  );
}

export default HomePage;
