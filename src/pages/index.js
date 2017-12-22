import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Logo from '../img/logo.png'
import Link from 'gatsby-link'

const boxStyles = [
  {
    title: 'About',
    style: 1,
    url: '/about',
    paragraph: `I'm a React.js specialist.`,
  },
  {
    title: 'Contact',
    style: 2,
    url: '/contact',
    paragraph: `Contact me now for a free quote.`,
  },
  {
    title: 'Experience',
    style: 1,
    url: '/experience',
    paragraph: `See my accomplishments.`,
  }
]

const Box = props => (
  <section className={`box-${props.style}`}>
    <Link to={props.url}>
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
    </Link>
  </section>
)

export default () => (
  <section id='home'>
    <img src={Logo} />
    <section id='menu'>
      {
        boxStyles.map(boxStyle => {
          const { title, style, url, paragraph } = boxStyle
          return (
            <Box
              style={style}
              title={title}
              url={url}
              paragraph={paragraph}
            />
          )
        })
      }
    </section>
  </section>
)