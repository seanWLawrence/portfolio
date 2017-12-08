import React from 'react'

const ContentWrapper = props => (
  <section className='content_wrapper' id={props.id} style={props.style}>
    <h1 className='page_title'>
      {props.title}
      {props.date ? <span className='page_date'>{props.date}</span> : null}
    </h1>
    <div className='page_horizontal_rule' />
    {props.children}
  </section>
)

export default ContentWrapper
