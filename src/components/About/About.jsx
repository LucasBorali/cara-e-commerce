import React from 'react';
import Banner from '../Home/Banner';
import banner from '../../Assets/about/banner.png';
import classes from './About.module.css';
import a6 from '../../Assets/about/a6.jpg';

const About = () => {
  window.scrollTo(0,0)
  return (
    <section className={classes.about}>
      <Banner banner={banner}>
        <h1>#KnowUs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </Banner>
      <div className={classes.info}>
        <img src={a6} alt="About Us"/>
        <div>
          <h2>Who We Are? </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus officia accusantium atque sit ipsam quos odio molestias magni, similique, explicabo sed consequatur doloremque totam delectus corrupti vitae dicta non?</p>
        </div>
      </div>
    </section>
  );
};

export default About;
