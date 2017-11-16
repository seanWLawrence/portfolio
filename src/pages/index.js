import React from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import CANVAS from '../data/canvas'
import styled from 'styled-components'
import Form from '../templates/form'

const Home = styled.section`
  background-color: rgba(0, 0, 0, .9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const particlesStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: -1,
}

const IndexPage = () => (
  <Home id='home'>
    <Particles
      params={CANVAS}
      style={particlesStyle}
    />
    <Form />
  </Home>
)

export default IndexPage
