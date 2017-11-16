import React from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import CANVAS from '../data/canvas'
import styled from 'styled-components'
import Form from '../templates/form'

const Home = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1325px) {
    flex-direction: column;
    justify-content: center;
  }
`

const particlesStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: -1,
  backgroundColor: 'rgba(0, 0, 0, .9)',
}

const BannerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50vw;
  }
  @media (max-width: 1325px) {
    height: 30%;
    width: 75vw;
  }
  @media (max-width: 740px) {
    margin-top: 40px;
  }
`

const FormWrapper = BannerWrapper.extend`
  align-items: center;
  @media (max-width: 1325px) {
    align-items: flex-start;
    justify-content: flex-start;
    height: 50%;
  }
`

const Header = styled.h1`
  color: #fff;
  font-size: 48px;
  margin: 0 0 20px 20%;
  width: 40vw;
  @media (max-width: 1325px) {
    width: 100%;
    margin: 0;
    font-size: 36px;
  }
  @media (max-width: 750px) {
    margin-top: 50px;
  }
  @media (max-width: 750px) {
    font-size: 28px;
  }
`

const Description = Header.extend`
  color: #aaa;
  font-size: 24px;
  width: 75%;
  @media (max-width: 1325px) {
    margin-top: 10px;
    font-size: 24px;
  }
  @media (max-width: 750px) {
    margin: 10px 0;
    font-size: 20px;
  }
`

const IndexPage = () => (
  <Home id='home'>
    <Particles
      params={CANVAS}
      style={particlesStyle}
    />
    <BannerWrapper id='banner-wrapper'>
      <Header>
        Beautiful, modern websites for businesses, non-profits and open source projects.
      </Header>
      <Description>
        Tell me about your project for free advice and quotes.
      </Description>
    </BannerWrapper>
    <FormWrapper id='form-wrapper'>
      <Form />
    </FormWrapper >
  </Home >
)

export default IndexPage
