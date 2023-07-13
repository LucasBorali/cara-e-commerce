import React from 'react'
import Banner from '../Home/Banner'
import b19 from '../../Assets/banner/b19.jpg'
import classes from './Blog.module.css'
import {blog} from '../../Assets/blog/blog'
import BlogPost from './BlogPost'

const Blog = () => {
  console.log(blog)
  return (
    <section className={classes.blog}>
        <Banner banner={b19}>
        <h1 >#readmore</h1>
        <p >Read all case studies about our products!</p>
      </Banner>
    {blog.map(post => <BlogPost post={post} key={post.date} />)}


    </section>
  )
}

export default Blog