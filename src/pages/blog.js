import React from 'react'
import ContentWrapper from '../components/ContentWrapper'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <ContentWrapper title='Blog' id='blog'>
      <section id='blog_post_wrapper'>
        {
          posts.map(post =>
            (post.node.frontmatter.template === 'blog_post')
              ? <section className='blog_post_preview' id={post.node.frontmatter.title} key={post.node.frontmatter.title}>
                <Link to={post.node.frontmatter.path}>
                  <h3 className='blog_post_title'>{post.node.frontmatter.title}</h3>
                </Link>
                <p className='blog_post_meta'>{post.node.frontmatter.date}</p>
                <p>{post.node.excerpt}</p>
                <Link to={post.node.frontmatter.path}>
                  <button className='button_secondary'>Read more</button>
                </Link>
              </section>
              : null
          )
        }

      </section>
    </ContentWrapper >
  )
}

export const query = graphql`
  query AllBlogPostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          html
          excerpt
          timeToRead
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