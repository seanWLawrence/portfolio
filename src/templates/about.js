import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import SocialMedia from '../components/SocialMedia'
import ProfileImage from '../img/sean_lawrence.jpg'

export default ({ data }) => {
  const { html } = data.markdownRemark
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
        <img src={ProfileImage} style={{ width: '100%' }} />
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <SocialMedia />
      </section>
    </PageWrapperSlim>
  )
}

export const query = graphql`
  query AboutPageQuery($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      frontmatter {
        title
      }
      }
}`