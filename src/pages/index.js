import React, { Component } from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import CANVAS_DATA from '../data/canvas'
import Form from '../components/Form'

import 'prismjs/themes/prism-solarizedlight.css'

const particlesStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: 0,
  backgroundColor: 'rgba(10, 10, 10, .9)',
}

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
      <section id='home'>
        {
          this.state.showCanvas === true
            ? <Particles
              params={CANVAS_DATA}
              style={particlesStyle}
            />
            : console.log('yo')
        }

        <section id='banner-wrapper'>
          <h1 id='banner_title'>
            Beautiful, modern websites for businesses, non-profits and open source projects.
      </h1>
          <p id='banner_text'>
            Tell me about your project for free advice or a pricing quote.
      </p>
        </section>
        <section id='form_wrapper'>
          <Form />
        </section>
      </section>
    )
  }
}

export default Contact
