import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'

import './index.scss'
import 'prismjs/themes/prism.css'

const TemplateWrapper = ({ children }) => (
  <section id='site_wrapper'>
    <Helmet>
      <meta property="og:site_name" content="Sean Lawrence - Modern web developer" />
    </Helmet>
    <Header />
    <main id='site_content'>
      {children()}
      <img src={Favicon} />
    </main>
  </section >
)

export default TemplateWrapper
