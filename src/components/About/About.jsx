import React from 'react'
import Banner from '../Home/Banner'
import banner from '../../Assets/about/banner.png'
import classes from './About.module.css'

const About = () => {
  return (
    <section className={classes.about}>
        <Banner banner={banner}>
        <h1 >#KnowUs</h1>
        <p >Lorem ipsum dolor sit amet, consectetur</p>
      </Banner>
    </section>
  )
}

export default About