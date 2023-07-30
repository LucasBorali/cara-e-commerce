import React from 'react';
import classes from './Banner.module.css';

const Banner = props => {
  return (
    <div
      style={{
        width: window.innerWidth <= 500 ? "90vw" : props.width,
        height: props.height,
        alignItems: props.alignItems,
        
      }}
      className={classes.banner}
    >
      {props.children}
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          left: '0',
          zIndex: '-1',
        }}
        src={props.banner}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
