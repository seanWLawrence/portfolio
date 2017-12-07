import React from "react"
import ContentWrapper from '../components/ContentWrapper'
import ABOUT_DATA from '../data/about'
import Link from 'gatsby-link'

const { PROFILE_IMAGE, SOCIAL_LINKS } = ABOUT_DATA

export default ({ data }) => {
  const about = data.markdownRemark
  return (
    <ContentWrapper title='About' id='about'>
      <section id='about_wrapper'>
        <section id='bio_wrapper'>
          <section id='bio' dangerouslySetInnerHTML={{ __html: about.html }} />
          <section className='social_logos_wrapper'>
            <Link to='/resume'>
              <button className='button_primary'>Resume</button>
            </Link>
            {
              SOCIAL_LINKS.map(platform =>
                <a href={platform.profile_url}
                  title={platform.title}
                  target='_blank'
                  rel='nofollow norefferer noopenner'
                  key={platform.title}
                >
                  <img src={platform.logo_url}
                    alt={platform.title}
                    className='social_logo'
                  />
                </a>
              )
            }
          </section>
        </section>
        <img
          src={PROFILE_IMAGE}
          id='profile_image'
          alt='Profile picture of Sean Lawrence'
        />
      </section>
    </ContentWrapper>
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