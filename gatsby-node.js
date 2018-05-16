const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    let formatSlug = ({slug, template}) => {
      if (template === "blog_post") {
        return "/blog/".concat(slug.slice(17))
      }
      return slug
    }
    createNodeField({
      node,
      name: `slug`,
      value: formatSlug({slug, template: node.frontmatter.template}),
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    path
                    date
                    template
                    featuredImage 
                  }
                  html
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          let { frontmatter, fields } = node
          let { template, featuredImage } = frontmatter
          let { slug } = fields

          createPage({
            path: slug,
            component: path.resolve(`src/templates/${template}.js`),
            layout: `index`,
            context: {
              slug,
              featuredImage: `/${featuredImage}/`
            },
          })
        })
      })
    )
  })
}
