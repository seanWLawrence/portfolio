import React from 'react'
import Link from 'gatsby-link'

const BlogWrapper = props => (
  <section className='blog_post_wrapper' id={props.id} style={props.style}>
    <h1 className='post_title'>
      {props.title}
    </h1>
    <div className='post_horizontal_rule' />
    {props.date ? <span className='post_date'>{props.date}</span> : null}
    <Link to='/blog'>
      <button className='breadcrumb'>&#8656; All posts</button>
    </Link>
    {props.children}
    <Link to='/blog'>
      <button className='breadcrumb' style={{marginTop: '-20px'}}>&#8656; All posts</button>
    </Link>
  </section>
)

export default BlogWrapper
