import React from 'react'
import Header from './header'

import './index.scss'
import 'prismjs/themes/prism.css'

const TemplateWrapper = ({ children }) => (
  <section id='site_wrapper'>
    <Header />
    <main id='site_content'>
      {children()}
    </main>
  </section >
)

export default TemplateWrapper
