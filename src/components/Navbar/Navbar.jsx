import { React, useState } from 'react';
import classes from './Navbar.module.css';
import ReactDOM from 'react-dom';
import logo from '../../Assets/logo.png';

const Navbar = ({setWindow}) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);

  const displayMenuHandler = function () {
    if (!displayMenu) {
      setDisplayMenu(true);
    } else {
      setDisplayMenu(false);
    }
  };

  const overlayHandler = function () {
    setDisplayMenu(false);
  };

  const displayCartHandler = function () {
    if (!displayCart) {
      setDisplayCart(true);
    } else {
      setDisplayCart(false);
    }
  };

  const changeWindowHandler = function(e) {
    setWindow(e.target.innerText)
  }


  return (
    <nav className={classes.navbar}>
      <img src={logo} alt="logo" />

      {displayMenu &&
        ReactDOM.createPortal(
          <div onClick={overlayHandler} className={classes.overlay}>
            <ul onClick={changeWindowHandler} className={classes.menu}>
              <li >
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>,
          document.getElementById('window-root')
        )}

      <div>
        {window.innerWidth <= 500 ? (
          <button onClick={displayMenuHandler}>
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path>
            </svg>
          </button>
        ) : (
          <ul onClick={changeWindowHandler}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        )}

        {displayCart &&
          ReactDOM.createPortal(
            <div onClick={displayCartHandler} className={classes.overlay}>
              <ul className={classes.cart}>
                <li>fisrt item</li>
              </ul>
            </div>,
            document.getElementById('window-root')
          )}

        <button onClick={displayCartHandler}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.34717 10.3339C5.41971 9.46346 5.45598 9.02824 5.74302 8.76412C6.03007 8.5 6.4668 8.5 7.34027 8.5H16.6597C17.5332 8.5 17.9699 8.5 18.257 8.76412C18.544 9.02824 18.5803 9.46346 18.6528 10.3339L18.8772 13.0259C19.1202 15.9422 19.2417 17.4004 18.6308 18.4758C18.3302 19.0049 17.9129 19.4584 17.4106 19.8019C16.3896 20.5 14.9264 20.5 12 20.5V20.5C9.07359 20.5 7.61038 20.5 6.58943 19.8019C6.08711 19.4584 5.66979 19.0049 5.36922 18.4758C4.7583 17.4004 4.87982 15.9422 5.12284 13.0259L5.34717 10.3339Z"
              stroke="#222222"
              stroke-opacity="1"
            />
            <path
              d="M8.5 7L8.5 6.5C8.5 4.567 10.067 3 12 3V3C13.933 3 15.5 4.567 15.5 6.5L15.5 7"
              stroke="#222222"
            />
            <path d="M8.5 12.5V11" stroke="#222222" stroke-linecap="round" />
            <path d="M15.5 12.5V11" stroke="#222222" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
