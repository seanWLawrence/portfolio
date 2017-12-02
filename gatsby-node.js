const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
                  frontmatter {
                    title
                    path
                    date
                    template
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
          const { frontmatter } = node
          createPage({
            path: frontmatter.path,
            component: path.resolve(`src/templates/${frontmatter.template}.js`),
            // If you have a layout component at src/layouts/blog-layout.js
            layout: `index`,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            /* context: {
              path,
            }, */
          })
        })
      })
    )
  })
}