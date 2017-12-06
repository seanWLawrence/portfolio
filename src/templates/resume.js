import React from "react"
import ContentWrapper from '../components/ContentWrapper'

export default ({ data }) => {
  const resume = data.markdownRemark
  return (
    <ContentWrapper title='Resume' id='resume'>
      <section id='resume_content' dangerouslySetInnerHTML={{ __html: resume.html }} />
    </ContentWrapper>
  )
}

export const query = graphql`
  query ResumePageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
}`