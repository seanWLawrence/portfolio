import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import SocialMedia from '../components/SocialMedia'
import ProfileImage from '../images/sean_lawrence.jpg'
import Img from 'gatsby-image'

export default ({ data }) => {
  const { html } = data.markdownRemark
  let { featuredImage } = data
  return (
    <PageWrapperSlim
      title='About'
      id='about'
      ogType='article'
      description='Professional JavaScript web developer that specializes in modern design with React.js and Node.js.'
      image={ProfileImage}
      imageDescription='Profile image of Sean Lawrence'
      url='https://seanlawrence.co/about'
    >
      <section id='bio'>
        <Img sizes={featuredImage.sizes} />
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <SocialMedia />
      </section>
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query AboutPageQuery($slug: String!, $featuredImage: String) {
    markdownRemark(fields: { slug: {eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    featuredImage: imageSharp(id: { regex: $featuredImage}) {
      sizes(maxWidth: 700, quality: 100 ) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`