import React from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import CANVAS from '../data/canvas'
import styled from 'styled-components'
import Form from '../templates/form'

const ParticlesWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .9);
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
`

const IndexPage = () => (
  <section id='home'>
    <ParticlesWrapper>
      <Particles params={CANVAS} />
      <Form />
    </ParticlesWrapper>
  </section>
)

export default IndexPage
