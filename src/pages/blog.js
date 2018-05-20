import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  let { featuredImages: {edges: images}} = data

  let imagesWithId = images.map(image => {
    let endOfDate = image.node.id.indexOf('.')
    let startOfDate = endOfDate - 10
    let id = image.node.id.slice(startOfDate, endOfDate)
    return {...image.node, id}
  })

  let postsWithFeaturedImages = posts.filter(post => post.node.frontmatter.featuredImage)

  let postsWithId = postsWithFeaturedImages.map(post => {
    let endOfDate = post.node.frontmatter.featuredImage.indexOf('.')
    let startOfDate = endOfDate - 10
    let id = post.node.frontmatter.featuredImage.slice(startOfDate, endOfDate)
    return {...post.node, id}
  })

  let imagesAndPosts = [...imagesWithId, ...postsWithId]

  let sortedImagesAndPosts = imagesAndPosts.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  })

  let mergedImagesAndPosts = sortedImagesAndPosts.map(node => {
    let indexOfThisNode = sortedImagesAndPosts.indexOf(node)
    let isOdd = ({index, fn}) => index % 2 === 0 ? fn : null
    let mergedPost = isOdd({
      index: indexOfThisNode, 
      fn: {...node, ...sortedImagesAndPosts[indexOfThisNode + 1]}
    })
    return mergedPost
  }).filter(node => node !== null && node.frontmatter && node.frontmatter.template === "blog_post" ? node : null)

  return (
    <PageWrapperSlim
      title='Blog'
      id='blog'
      description='A blog about modern web development.'
      url='https://seanlawrence.co/blog'
      ogType='https://schema.org/Blog'
    >
      {
        mergedImagesAndPosts.map(post => {
          let { 
            timeToRead,
            excerpt, 
            wordCount, 
            sizes,
            frontmatter: {
              template, 
              title, 
              date
            },
            fields: {
              slug
            } 
          } = post;

            return (
              <section
                id={title}
                className='blog_post_preview'
                key={title}
              >
                <Link to={slug}>
                  <Img sizes={sizes} style={{margin: '30px auto'}} />
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
      )
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
            featuredImage
          }
        }
      }
    }
    featuredImages: allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 700, quality: 65) {
            ...GatsbyImageSharpSizes_withWebp_tracedSVG
          }
        }
      }
    }
  }
`