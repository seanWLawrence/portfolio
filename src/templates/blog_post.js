import React from "react"
import BlogWrapper from '../components/BlogWrapper'

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: info } = post

  return (
    <BlogWrapper title={info.title} className='blog_post' id={info.title} date={info.date} titleStyle={{fontSize: '34px', lineHeight: '35px'}}>
      <section className='page_skinny' dangerouslySetInnerHTML={{ __html: post.html }} />
    </BlogWrapper>
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