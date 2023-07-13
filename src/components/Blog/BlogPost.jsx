import React from 'react';
import classes from './BlogPost.module.css';

const BlogPost = ({ post }) => {
  return (
    <div className={classes['blog-post']}>
      <img src={post.postIMG} alt="" srcset="" />
      <p className={classes.date}>{post.date}</p>
      <div>
        <h2>{post.title}</h2>
        <p>{post.postContent}</p>
        <a href={post.postLink} target="_blank" rel="noopener noreferrer">Continue Reading</a>
        
      </div>
    </div>
  );
};

export default BlogPost;
