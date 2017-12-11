import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import SocialMedia from '../components/SocialMedia'

// props needed: description, image, imageDescription, title, date, style, titleStyle, url, children
export default ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <PageWrapperSlim
      title='About'
      id='about'
      schemaType='http://schema.org/AboutPage'
    >
      <section id='bio'>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <SocialMedia />
      </section>
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query AboutPageQuery($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      frontmatter {
        title
      }
      }
}`