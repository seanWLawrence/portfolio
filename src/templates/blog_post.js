import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, date } = frontmatter

  return (
    <PageWrapperSlim
      title={title}
      id={title}
      date={date}
      titleStyle={{ fontSize: '34px', lineHeight: '40px' }}
    >
      <Link to='/blog'>
        <button
          className='breadcrumb'
        >
          &#8656; All posts
        </button>
      </Link>
      <section className='blog_post' dangerouslySetInnerHTML={{ __html: html }} />
      <Link to='/blog'>
        <button
          className='breadcrumb'
        >
          &#8656; All posts
        </button>
      </Link>
    </PageWrapperSlim>
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