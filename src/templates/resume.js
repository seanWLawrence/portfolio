import React from "react"
import styled from 'styled-components'

const Post = styled.section`
  width: 50vw;
  margin: 100px 25vw 50px 25vw;
`

export default ({ data }) => {
  const resume = data.markdownRemark
  return (
    <Post id='resume'>
      <section dangerouslySetInnerHTML={{ __html: resume.html }} />
    </Post>
  )
}

export const query = graphql`
  query ResumePageQuery {
    markdownRemark {
      html
    }
  }`