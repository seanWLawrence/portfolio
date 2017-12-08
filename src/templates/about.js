import React from "react"
import PageWrapperSlim from '../components/PageWrapperSlim'
import ABOUT_DATA from '../data/about'
import Link from 'gatsby-link'

const { SOCIAL_LINKS } = ABOUT_DATA

export default ({ data }) => {
  const { html } = data.markdownRemark
  return (
    <PageWrapperSlim title='About' id='about'>
      <section id='bio'>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <section className='social_media_links'>
          <Link to='/resume'>
            <button className='button_primary'>Resume</button>
          </Link>
          {
            SOCIAL_LINKS.map(platform => {
              const { profile_url, title, logo_url } = platform;
              return (
                <a
                  title={title}
                  href={profile_url}
                  target='_blank'
                  rel='nofollow norefferer noopenner'
                  key={title}
                >
                  <img src={logo_url}
                    alt={title}
                    className='social_media_logo'
                  />
                </a>
              )
            })
          }
        </section>
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