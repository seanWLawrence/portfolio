import React from 'react'
import ABOUT_DATA from '../data/about'
import Link from 'gatsby-link'

const { SOCIAL_LINKS } = ABOUT_DATA

const SocialMedia = () => {
    return (
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
    )
}

export default SocialMedia