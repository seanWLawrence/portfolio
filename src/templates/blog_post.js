import React from "react"
import ContentWrapper from '../components/ContentWrapper'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: info } = post

  return (
    <ContentWrapper title={info.title} id='blog_post' date={info.date}>
      <Link to='/blog'>
        <button className='breadcrumb'>&#8656; All posts</button>
      </Link>
      <section className='post_content' dangerouslySetInnerHTML={{ __html: post.html }} />
    </ContentWrapper>
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