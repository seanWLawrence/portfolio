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
          const { template, title, path, date } = post.node.frontmatter;
          const { excerpt, wordCount } = post.node;
          if (template === 'blog_post') {
            return (
              <section
                id={title}
                className='blog_post_preview'
                key={title}
              >
                <Link to={path}>
                  <h3>{title}</h3>
                </Link>
                <p className='post_preview_meta'>{date}</p>
                <p>{excerpt}</p>
                <Link to={path}>
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
          html
          excerpt(pruneLength: 300)
          timeToRead
          wordCount {
            words
          }
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            template
          }
        }
      }
    }
  }`