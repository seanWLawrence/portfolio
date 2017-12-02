import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'

import '../styles/index.scss'
import 'prismjs/themes/prism.css'

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

export default TemplateWrapper
