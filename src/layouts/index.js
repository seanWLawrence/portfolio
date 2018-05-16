import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import './index.scss'
import 'prismjs/themes/prism-tomorrow.css'

const TemplateWrapper = ({ children, data }) => (
  <section id='site_wrapper'>
    <Helmet>
      <meta property="og:site_name" content="Sean Lawrence - Modern web developer" />
    </Helmet>
    <Header />
    <main id='site_content'>
      {children()}
    </main>
  </section>
)

export const query = graphql`
  query B {
    featuredImage: imageSharp(id: { regex: "/test/" }) {
      sizes(maxWidth: 750 ) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
` 

export default TemplateWrapper
