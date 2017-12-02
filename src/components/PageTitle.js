import React from 'react'

const PageTitle = props => (
  <section className='page_title_wrapper'>
    <h1 className='page_title'>{props.title}</h1>
    <div className='page_horizontal_rule' />
  </section>
)

export default PageTitle
