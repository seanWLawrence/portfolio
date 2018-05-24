import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  let { featuredImages: {edges: images}} = data
  let dateRegEx = /(\d{4})-(\d{2})-(\d{2})/

  let imagesWithId = images.map(image => {
    let {id} = image.node
    if (dateRegEx.test(id)) {
      let endOfDate = id.indexOf('.')
      let startOfDate = endOfDate - 10
      let newId = id.slice(startOfDate, endOfDate)
      return {...image.node, id: newId}
    }
    return 
  }).filter(Boolean)

  let postsWithId = posts
  .filter(post => {
    let {template, featuredImage} = post.node.frontmatter
    return template === "blog_post" && featuredImage
  })
  .map(post => {
    let { frontmatter: {featuredImage}, id} = post.node
    let endOfDate = featuredImage.indexOf('.')
    let startOfDate = endOfDate - 10
    let newId = featuredImage.slice(startOfDate, endOfDate)
    return {...post.node, id: newId}
  })

  let sortedImagesAndPosts = [...imagesWithId, ...postsWithId]
    .sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    })

  let newPosts = sortedImagesAndPosts.map(node => {
    let indexOfThisNode = sortedImagesAndPosts.indexOf(node)
    let isOdd = ({index, fn}) => index % 2 === 0 ? fn : null
    let mergedPost = isOdd({
      index: indexOfThisNode, 
      fn: {...node, ...sortedImagesAndPosts[indexOfThisNode + 1]}
    })
    return mergedPost
  })
  .filter(node => node !== null && node.frontmatter && node.frontmatter.template === "blog_post" ? node : null)

  return (
    <PageWrapperSlim
      title='Blog'
      id='blog'
      description='A blog about modern web development.'
      url='https://seanlawrence.co/blog'
      ogType='https://schema.org/Blog'
    >
      {
        newPosts.map(post => {
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