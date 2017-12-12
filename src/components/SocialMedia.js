import React from 'react'
import SOCIAL_MEDIA from '../data/SOCIAL_MEDIA'
import Link from 'gatsby-link'

const SocialMedia = () => {
    return (
        <section className='social_media_links'>
            <Link to='/resume'>
                <button className='button_primary'>Resume</button>
            </Link>
            {
                SOCIAL_MEDIA.map(platform => {
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