import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'
import Logo from '../images/logo.png'
import Img from "gatsby-image"

export default ({ data }) => {
  const { html, frontmatter, wordCount, timeToRead } = data.markdownRemark
  const { title, date, description, photoCredit: { name, unsplashUrl} } = frontmatter
  const { sizes } = data.featuredImage
  const schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://google.com/article"
    },
    "headline": { title },
    "image": Logo,
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
    <article className="blog_post" style={{width: '90vw', maxWidth: '700px', display: 'flex', flexDirection: 'column', margin: '100px auto 50px auto', overflow: 'hidden'}}>
      <Img sizes={data.featuredImage.sizes} style={{ maxHeight: 400}}/>
      <p style={{color: '#555', fontSize: 12, fontWeight: 100, textAlign: 'center', marginBottom: '20px'}}>
        Photo credit: 
        <a style={{fontSize: 12}} href={unsplashUrl} target="_blank" rel="noopenner noferrer nofollow">      {name}
        </a>
      </p>
      <h1
        className='page_title'
        style={{fontSize: '34px', lineHeight: '40px'}}
      >
        {title}
      </h1>
      {date ? <p className='date'>{`${date} - ${timeToRead} min read`}</p> : null}
      <section
        className='blog_post'
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Link to='/blog'>
        <button className='breadcrumb'>
          &#8656; All posts
        </button>
      </Link>
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!, $featuredImage: String ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      wordCount {
        words
      }
      timeToRead
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
        photoCredit {
          name
          unsplashUrl
        }
      }
    }
    featuredImage: imageSharp(id: { regex: $featuredImage}) {
      sizes(maxWidth: 700, quality: 65) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
` 