import React from "react"

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
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
    frontmatter {
      title
      path
      date(formatString: "MMMM DD, YYYY")
    }
  }
}`