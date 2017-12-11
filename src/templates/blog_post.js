import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { html, frontmatter, wordCount } = data.markdownRemark
  const { title, date, description } = frontmatter
  // props needed: id, schemaType, description, image, imageDescription, title, date, style, titleStyle, url, children

  return (
    <PageWrapperSlim
      title={title}
      id={title}
      schemaType='http://schema.org/BlogPosting'
      date={date}
      wordCount={wordCount.words}
      titleStyle={{ fontSize: '34px', lineHeight: '40px' }}
      description={description}
    >
      <Link to='/blog'>
        <button
          className='breadcrumb'
        >
          &#8656; All posts
        </button>
      </Link>
      <section itemprop="articleBody" className='blog_post' dangerouslySetInnerHTML={{ __html: html }} />
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
      wordCount {
          words
        }
    frontmatter {
      title
      path
      date(formatString: "MMMM DD, YYYY")
    }
  }
}` 