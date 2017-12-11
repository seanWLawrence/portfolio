import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'

// props needed: id, schemaType, description, image, imageDescription, title, date, style, titleStyle, url, children
export default ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <PageWrapperSlim title='Services' id='services'>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query ServicesPageQuery($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      }
      }`