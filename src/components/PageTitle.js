import React from 'react'

import '../styles/components/page_title.scss'

const PageTitle = props => (
  <section
    id={props.title}
    className='page_title'
  >
    <h1>{props.title}</h1>
    <hr />
    {props.children}
  </section>
)

export default PageTitle
