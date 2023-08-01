import '../App.css';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import { summerItems, newArrivals } from '../Assets/products/products';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from '../store/cart-actions';

function HomePage() {
  const dispatch = useDispatch();
  const [window, setWindow] = useState('Home');
  const cart = useSelector(state => state.cart);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial();
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
