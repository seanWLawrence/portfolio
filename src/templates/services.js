import React from 'react'
import ContentWrapper from '../components/ContentWrapper'

export default ({ data }) => {
  const { markdownRemark: services } = data
  return (
    <ContentWrapper title='Services' id='services'>
      <section id='service_content' dangerouslySetInnerHTML={{ __html: services.html }} />
    </ContentWrapper>
  )
}

export const query = graphql`
  query ServicesPageQuery($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      }
      }`