import React from 'react'
import Banner from '../Home/Banner'
import banner from '../../Assets/about/banner.png'
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <section className={classes.contact}>
        <Banner banner={banner}>
        <h1 >#let's_talk</h1>
        <p >LEAVE A MESSAGE, We love to hear from you!</p>
      </Banner>
    </section>
  )
}

export default Contact