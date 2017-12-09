import React from 'react'
import Link from 'gatsby-link'
import PageWrapperSlim from '../components/PageWrapperSlim'

const ThankYou = () => (
  <PageWrapperSlim
    title='Thank you!'
    id='thank_you'
  >
    <p>Your form was sent successfully and I can't wait to learn more about you and your project!</p>
    <p>Talk soon,
    <br />
      Sean W. Lawrence
    </p>
    <section className='navigation_buttons'>
      <Link to='/'>
        <button className='button_secondary'>Back to home</button>
      </Link>
      <Link to='/blog'>
        <button className='button_primary'>Visit blog</button>
      </Link>
    </section>
  </PageWrapperSlim >
)

export default ThankYou
