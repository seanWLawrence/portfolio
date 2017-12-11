import React, { Component } from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import CANVAS_DATA from '../data/canvas'
import Form from '../components/Form'

const particlesStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  backgroundColor: 'rgba(10, 10, 10, .9)',
}

class Contact extends Component {
  state = {
    showCanvas: false,
  }

  componentDidMount() {
    if (window.innerWidth > 750) {
      this.setState({
        showCanvas: true,
      })
    }
  }

  mountParticles() {
    return (
      <Particles
        params={CANVAS_DATA}
        style={particlesStyle}
      />
    )
  }

  render() {
    return (
      <section id='contact' itemScope itemType='http://schema.org/ContactPage'>
        {(this.state.showCanvas === true) ? this.mountParticles() : null}
        <section className='hero_wrapper'>
          <h1 itemProp='about accessibilitySummary text'>
            Beautiful, modern websites for businesses, non-profits and open source projects.
          </h1>
          <p>
            Tell me about your project for free advice or a pricing quote.
          </p>
        </section>
        <Form />
      </section>
    )
  }
}

export default Contact
