import React from 'react'
import Banner from '../Home/Banner'
import b19 from '../../Assets/banner/b19.jpg'
import classes from './Blog.module.css'

const Blog = () => {
  return (
    <section className={classes.blog}>
        <Banner banner={b19}>
        <h1 >#readmore</h1>
        <p >Read all case studies about our products!</p>
      </Banner>
    </section>
  )
}

export default Blog