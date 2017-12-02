import React from "react"
import styled from 'styled-components'

const Post = styled.section`
  width: 50vw;
  margin: 100px 25vw 50px 25vw;
  @media (max-width: 750px) {
    width: 90vw;
    margin: 100px 5vw;
  }
`

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: info } = post
  console.log(post)
  return (
    <Post id='resume'>
      <h1>{info.title}</h1>
      <p>{info.date}</p>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>
  )
}

export const query = graphql`
  query PostPageQuery($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
    frontmatter {
      title
      path
      date(formatString: "MMMM DD, YYYY")
    }
  }
}`