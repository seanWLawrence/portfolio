import React from 'react'

const PageWrapperSlim = props => {
  const { id, title, date, style, titleStyle, children } = props;
  return (
    <section
      id={id}
      className='page_wrapper_slim'
      style={style}
    >
      <h1
        className='page_title'
        style={titleStyle}
      >
        {title}
      </h1>
      {date ? <span class='date'>{date}</span> : null}
      {children}
    </section>
  )
}

export default PageWrapperSlim
