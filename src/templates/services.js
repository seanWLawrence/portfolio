import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Logo from '../img/logo.png'

// props needed: description, image, imageDescription, title, date, style, titleStyle, url, children
export default ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <PageWrapperSlim
      title='Services'
      id='services'
      description='Professional website design, development, and consulting services.'
      image={Logo}
      imageDescription='Logo for Sean Lawrence Web Design'
      metaDate='2017-12-11'
      url='https://seanlawrence.co/services'
    >
      <section
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query ServicesPageQuery($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
    html
  }
}`