import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'
import Logo from '../img/logo.png'

export default ({ data }) => {
  const { html, frontmatter, wordCount } = data.markdownRemark
  const { title, date, description } = frontmatter
  // props needed: id, schemaType, description, image, imageDescription, title, date, style, titleStyle, url, children
  const schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://google.com/article"
    },
    "headline": { title },
    "image": Logo || { image },
    "datePublished": { date },
    "dateModified": { date },
    "author": {
      "@type": "Person",
      "name": "Sean Lawrence"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sean Lawrence",
      "logo": {
        "@type": "ImageObject",
        "url": Logo
      },
      "sameAs": [
        "https://www.github.com/seanwlawrence",
        "https://www.linkedin.com/in/sean-lawrence-21792799/"
      ]
    },
    "description": { description }
  }

  return (
    <PageWrapperSlim
      title={title}
      id={title}
      schema={schema}
      titleStyle={{ fontSize: '34px', lineHeight: '40px' }}
      description={description}
      date={date}
    >
      <Link to='/blog'>
        <button className='breadcrumb'>
          &#8656; All posts
        </button>
      </Link>
      <section
        className='blog_post'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Link to='/blog'>
        <button className='breadcrumb'>
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