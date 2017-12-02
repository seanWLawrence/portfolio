import React from 'react'
import Link from 'gatsby-link'

const WorkProject = props => (
  <section id={props.title} className='work_wrapper'>
    <section className='work_text_wrapper'>
      <a
        href={props.url}
        title={props.title}
        rel='noreferrer nofollow noopener'
        target='_blank'
        className='work_title'
      >
        {props.title}
      </a>
      <p className='work_description'>{props.description}</p>
      <a href={props.url}
        title={props.title}
        rel='noreferrer nofollow noopener'
        target='_blank'
      >
        <button
          className='button_primary'
          style={{ margin: '10px 0' }}
        >
          Visit
      </button>
      </a>
    </section>
    <div className='arrow_wrapper'>
      <i className='arrow' />
    </div>
    <iframe
      src={props.url}
      title={props.title}
      frameBorder="0"
      allowFullScreen
      className='work_website'
    >
    </iframe>
  </section>
)

export default WorkProject