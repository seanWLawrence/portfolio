import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const ThankYou = () => (
  <section id='thank-you'>
    <section id='thank_you_card'>
      <h1>Thank you!</h1>
      <p>Your form was sent successfully and I can't wait to learn more about you and your project!</p>
      <p>Talk soon,
    <br />
        Sean W. Lawrence
    </p>
    </section>
    <Link to='/'>
      <button className='primary_button'>Back to home</button>
    </Link>
  </section>
)

export default ThankYou
