import React from "react"

import '../styles/pages/resume.scss'

export default ({ data }) => {
  const resume = data.markdownRemark
  return (
    <section id='resume'>
      <section dangerouslySetInnerHTML={{ __html: resume.html }} />
    </section>
  )
}

export const query = graphql`
  query ResumePageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
}`