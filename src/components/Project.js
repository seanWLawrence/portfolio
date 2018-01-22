import React from 'react'

const Project = props => {
  const { title, url, description } = props;
  return (
    <section id={title} className='work_project'>
      <section className='description'>
        <a
          title={title}
          href={url}
          rel='noreferrer nofollow noopener'
          target='_blank'
        >
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <a
          title={title}
          href={url}
          rel='noreferrer nofollow noopener'
          target='_blank'
        >
          <button
            className='button_secondary'
            style={{ margin: '10px 0' }}
          >
            Visit
      </button>
        </a>
      </section>
    </section>
  )
}

export default Project