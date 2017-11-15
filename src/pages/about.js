/* import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const PageWrapper = styled.div`
display: flex;
justify-content: center;
margin: 0;
`


const About = () => (
  <section id='about'>
    <PageWrapper>
      <h1>About</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </PageWrapper>
  </section>
)

export default About
 */

import React from "react"

export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "} - {node.frontmatter.date}
          </h3>
          <p>
            {node.excerpt}
          </p>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`