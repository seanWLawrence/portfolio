import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <PageWrapperSlim
      title='Blog'
      id='blog'
      description='A blog about modern web development.'
      url='https://seanlawrence.co/blog'
      ogType='https://schema.org/Blog'
    >
      {
        posts.map(post => {
          const { template, title, date } = post.node.frontmatter;
          const { 
            timeToRead,
            excerpt, 
            wordCount, 
            fields: {
              slug
            } 
          } = post.node;
          console.log(slug)
          if (template === 'blog_post') {
            return (
              <section
                id={title}
                className='blog_post_preview'
                key={title}
              >
                <Link to={slug}>
                  <h3>{title}</h3>
                </Link>
                <p className='post_preview_meta'>{date} - {timeToRead} min read</p>
                <p>{excerpt}</p>
                <Link to={slug}>
                  <button className='button_secondary'>Read more</button>
                </Link>
              </section>
            )
          }
        })
      }
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query AllBlogPostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          fields {
            slug
          }
          html
          excerpt(pruneLength: 300)
          timeToRead
          wordCount {
            words
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            template
          }
        }
      }
    }
  }`