import React from 'react'
import Header from './header'
import Helmet from 'gatsby-plugin-react-helmet'

import './index.scss'
import 'prismjs/themes/prism.css'

const TemplateWrapper = ({ children }) => (
  <section id='site_wrapper'>
    <Helmet />
    <Header />
    <main id='site_content'>
      {children()}
    </main>
  </section >
)

export default TemplateWrapper
