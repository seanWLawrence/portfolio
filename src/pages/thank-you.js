import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const ThankYouWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2D9CDB;
`

const ThankYouCard = styled.section`
  padding: 25px;
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 1px 9px #999;
`

const Button = styled.button`
  background-color: #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  min-width: 200px;
  border: 0;
  outline: 0;
  cursor: pointer;
`

const ThankYou = () => (
  <ThankYouWrapper id='thank-you'>
    <ThankYouCard>
      <h1>Thank you!</h1>
      <p>Your form was sent successfully and I can't wait to learn more about you and your project!</p>
      <p>Talk soon,
    <br />
        Sean W. Lawrence
    </p>
    </ThankYouCard>
    <Link to='/'>
      <Button>Back to home</Button>
    </Link>
  </ThankYouWrapper>
)

export default ThankYou
