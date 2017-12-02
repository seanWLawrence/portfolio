import React, { Component } from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import CANVAS_DATA from '../data/canvas'
import styled from 'styled-components'
import Form from '../components/Form'

require("prismjs/themes/prism-solarizedlight.css")

const Home = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, .99);
  @media (max-width: 1325px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const particlesStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: 0,
  backgroundColor: 'rgba(10, 10, 10, .9)',
}

const BannerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50vw;
  margin-top: 40px;
  z-index: 1;
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
    margin: 175px 0 0 0;
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
class Contact extends Component {
  state = {
    showCanvas: false
  }

  componentDidMount() {
    (window.innerWidth > 750)
      ? this.setState({
        showCanvas: true
      })
      : null
  }

  render() {
    return (
      <Home id='home'>
        {
          this.state.showCanvas === true
            ? <Particles
              params={CANVAS_DATA}
              style={particlesStyle}
            />
            : <Header>{this.state.showCanvas}</Header>
        }

        <BannerWrapper id='banner-wrapper'>
          <Header>
            Beautiful, modern websites for businesses, non-profits and open source projects.
      </Header>
          <Description>
            Tell me about your project for free advice or a pricing quote.
      </Description>
        </BannerWrapper>
        <FormWrapper id='form-wrapper'>
          <Form />
        </FormWrapper >
      </Home >
    )
  }
}

export default Contact
