import './App.css';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { summerItems, newArrivals } from './Assets/products/products';
import b14 from './Assets/banner/b14.png';
import logo from './Assets/logo.png';
import app from './Assets/pay/app.jpg';
import play from './Assets/pay/play.jpg';
import pay from './Assets/pay/pay.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, sendCartData } from './store/cart-actions';


function App() {
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

      <div id="show-product-window"></div>

      {window === 'Home' && (
        <Home
          setWindow={[setWindow, window]}
          products={[summerItems, newArrivals]}
        />
      )}
      {window === 'Shop' && <Shop setWindow={[setWindow, window]} />}
      {window === 'Blog' && <Blog />}
      {window === 'About' && <About />}
      {window === 'Contact' && <Contact />}

      <div className="news-letter">
        <img src={b14} alt="subscribe" />
        <div>
          <h2>Sign Up For Newsletters</h2>
          <p>
            Get E-mail updates about our latest shop and{' '}
            <span>special offers.</span>
          </p>
        </div>
        <div className="subscribe">
          <input type="email" />
          <button>Sign Up</button>
        </div>
      </div>
      <footer>
        <div>
          <img src={logo} alt="logo" />
          <h4>Contact</h4>
          <ul>
            <li>
              <strong>Adress:</strong>
            </li>
            <li>
              <strong>Phone:</strong>
            </li>
            <li>
              <strong>Hours:</strong>
            </li>
          </ul>
          <h4>Follow Us</h4>
          <div className="icons">
            <svg
              height="2500"
              viewBox="37.29 0 80.559 155.139"
              width="2500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z"
                fill="#1a1b1f"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2476 2476"
              width="2500"
              height="2500"
            >
              <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5" />
            </svg>
            <svg
              height="2500"
              viewBox="117.806 161.288 464.388 377.424"
              width="2500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m582.194 205.976c-17.078 7.567-35.424 12.68-54.71 14.991 19.675-11.78 34.769-30.474 41.886-52.726-18.407 10.922-38.798 18.857-60.497 23.111-17.385-18.488-42.132-30.064-69.538-30.064-52.603 0-95.266 42.663-95.266 95.307a97.3 97.3 0 0 0 2.454 21.68c-79.211-3.989-149.383-41.928-196.382-99.562-8.18 14.112-12.885 30.474-12.885 47.899 0 33.05 16.833 62.236 42.377 79.314a95.051 95.051 0 0 1 -43.154-11.924v1.227c0 46.16 32.826 84.672 76.43 93.426a95.97 95.97 0 0 1 -25.095 3.313 95.929 95.929 0 0 1 -17.936-1.677c12.128 37.836 47.306 65.406 89.008 66.142-32.622 25.565-73.71 40.802-118.337 40.802-7.69 0-15.278-.45-22.743-1.33 42.173 27.06 92.24 42.807 146.029 42.807 175.275 0 271.094-145.17 271.094-271.073 0-4.09-.103-8.222-.287-12.312 18.612-13.458 34.769-30.208 47.51-49.29z"
                fill="##1a1b1f"
              />
            </svg>
            <svg
              height="2500"
              viewBox="0 .03 2498 2502.47"
              width="2496"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m0 1864.11v.11c1.5 55.5 2 111.32 11.32 166.47 9.92 58.35 24.1 115.25 51.15 168.21q54.86 107.52 150.21 181.66c45.52 35.5 95.25 63.69 150.3 81.47 80.26 25.89 163.07 35.81 247.09 36.3 52.42.33 104.81 1.64 157.25 1.42 380.82-1.6 761.65 2.75 1142.49-2.35 50.53-.68 100.24-6.85 149.84-15.92 95.06-17.4 179.07-58 250.95-122.09 83.77-74.71 140.29-166.16 165.81-276.52 16.69-72.14 20.87-145.32 21.58-218.77v-14.65c0-5.68-2.16-1247.91-2.36-1264.33-.55-45.1-3.88-89.87-12.33-134.25-10.29-54.08-24.82-106.78-50.71-155.7-27.35-51.7-61.6-98.17-104-138.79-64.89-62.23-139.78-106.23-227-129.51-78.74-21-159.07-25.68-240-25.6a2.45 2.45 0 0 1 -.45-1.24h-1224.74c0 .42 0 .83-.07 1.24-45.93.84-91.92.49-137.61 6.16-50.05 6.22-99.63 15.59-147 33.09-74.62 27.6-139.46 70.59-194.84 128-62.75 65-107 140.22-130.44 227.79-20.95 78.13-25.51 157.81-25.62 238.06"
                fill="#fff"
              />
              <path d="m0 .79h2498v2498h-2498z" fill="none" />
              <path
                d="m1293.24 1938.65-409.54-7.49c-132.6-2.61-265.53 2.6-395.53-24.44-197.76-40.4-211.77-238.49-226.43-404.65-20.2-233.6-12.38-471.44 25.74-703.09 21.52-129.98 106.21-207.54 237.18-215.98 442.12-30.63 887.18-27 1328.32-12.71 46.59 1.31 93.5 8.47 139.44 16.62 226.77 39.75 232.3 264.23 247 453.2 14.66 190.92 8.47 382.82-19.55 572.44-22.48 157-65.49 288.66-247 301.37-227.42 16.62-449.62 30-677.68 25.74.01-1.01-1.3-1.01-1.95-1.01zm-240.77-397.48c171.38-98.4 339.49-195.16 509.89-292.9-171.7-98.4-339.49-195.16-509.89-292.9z"
                fill="#1a1b1f"
              />
            </svg>
          </div>
        </div>
        <div>
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4>My Account</h4>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={app} alt="App Store" srcSet="" />
            <img src={play} alt="Play Store" srcSet="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay} alt="payment methods" />
        </div>
      </footer>
    </div>
  );
}

export default App;
