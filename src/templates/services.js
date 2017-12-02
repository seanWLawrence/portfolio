import React from 'react'
import PageTitle from '../components/PageTitle'

export default ({ data }) => {
  const { markdownRemark: services } = data
  return (
    <PageTitle id='services'>
      <section dangerouslySetInnerHTML={{ __html: services.html }} />
    </PageTitle>
  )
}

export const query = graphql`
  query ServicesPageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
}`