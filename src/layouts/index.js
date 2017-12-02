import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import './index.css'
require("prismjs/themes/prism.css")

const TemplateWrapper = ({ children }) => (
  <section id='app'>
    <Helmet
      title="Sean Lawrence - Modern Web Developer"
      meta={[
        { name: 'description', content: 'I make fast, modern websites with high-ranking SEO, analytics and results' },
        { name: 'keywords', content: 'website builder, web developer, web designer' },
      ]}
    />
    <Header />
    <main id='content'>
      {children()}
    </main>
  </section >
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
