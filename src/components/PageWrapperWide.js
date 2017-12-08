import React from 'react'

const PageWrapperWide = props => {
  const { id, title, style, children } = props;
  return (
    <section
      id={id}
      className='page_wrapper_wide'
      style={style}
    >
      <h1 className='page_title'>
        {title}
      </h1>
      {children}
    </section>
  )
}

export default PageWrapperWide
