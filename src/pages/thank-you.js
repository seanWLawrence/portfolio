import React from 'react'
import Link from 'gatsby-link'
import ContentWrapper from '../components/ContentWrapper'

const ThankYou = () => (
  <ContentWrapper title='Thank you!' id='thank-you' style={{ alignItems: 'flex-start' }}>
    <section id='thank_you_content'>
      <p>Your form was sent successfully and I can't wait to learn more about you and your project!</p>
      <p>Talk soon,
    <br />
        Sean W. Lawrence
    </p>
      <section id='thank_you_button_wrapper'>
        <Link to='/'>
          <button className='button_secondary'>Back to home</button>
        </Link>
        <Link to='/blog'>
          <button className='button_primary'>Visit blog</button>
        </Link>
      </section>
    </section>
  </ContentWrapper>
)

export default ThankYou
