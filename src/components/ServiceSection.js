import React from 'react'

const ServiceSection = props => (
  <section id='service'>
    <h2 className='service_title'>
      {props.title}
    </h2>
    <div className='service_video'>
      <iframe src={props.gif_url} frameBorder='0' allowFullScreen></iframe>
    </div>
    <blockquote className='service_summary'>
      {props.summary}
    </blockquote>
    <p className='service_description'>
      {props.description}
    </p>
  </section>
)

export default ServiceSection