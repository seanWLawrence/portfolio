import React from "react"

import '../styles/layouts/blog_post.scss'

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: info } = post
  console.log(post)
  return (
    <section id='blog_post'>
      <h1>{info.title}</h1>
      <p>{info.date}</p>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
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