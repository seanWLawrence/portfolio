import React, { Component } from 'react'
import Link from 'gatsby-link'
import Particles from 'react-particles-js'
import { CANVAS_DESKTOP, CANVAS_MOBILE } from '../data/CANVAS'
import Form from '../components/Form'
import Helmet from 'react-helmet'

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

const schema = {
  "@context": "https://schema.org/",
  "@type": "Organization",
  "url": "https://seanlawrence.co",
  "logo": "https://seanlawrence.co/logo.svg"
}

export default () => (
  <section id='contact'>
    <Helmet>
      <title> Sean Lawrence - Modern Web Developer</title>
      <meta charset="UTF-8" />
      <meta name="author" content="Sean Lawrence" />
      <meta name="keywords" content="HTML, CSS, React.js, JavaScript, Web Developer, Website Builder" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content='Professional JavaScript web developer that specializes in modern design, React.js and Node.js. Contact me now for free advice or a pricing quote.' />
      <base href="https://seanlawrence.co/" target="_self" />
      <meta property="og:type" content='website' />
      <meta property="og:title" content={'Sean Lawrence - Modern web developer'} />
      <meta property="og:description" content='Professional JavaScript web developer that specializes in modern design, React.js and Node.js. Contact me now for free advice or a pricing quote.' />
      <meta property="og:url" content='https://seanlawrence.co' />
      <meta property="og:image" content={'/img/sean_lawrence.jpg'} />
      <meta property="og:image:alt" content='Profile image of Sean Lawrence' />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="200" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@seanbeastgrip" />
      <meta name="google-site-verification" content="tkm-v6VCHYsnUCE5-xPwIpiBMOtrxHNvrz7kSlNP5sU" />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
    <Particles
      style={particlesStyle}
    />
    <section className='hero_wrapper'>
      <h1>
        Beautiful, modern websites for businesses, non-profits and open source projects.
          </h1>
      <p>
        Tell me about your project for free advice or a pricing quote.
          </p>
    </section>
    <Form />
  </section>
)

