import React from "react"
import styled from 'styled-components'

const Post = styled.section`
  width: 50vw;
  margin: 100px 25vw 50px 25vw;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Post id='resume'>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>
  )
}

export const query = graphql`
  query ResumePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }`