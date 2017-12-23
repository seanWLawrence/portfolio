import React from 'react'
import PageWrapperSlim from '../components/PageWrapperSlim'
import Logo from '../img/logo.png'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ProfileImage from '../img/sean_lawrence.jpg'

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

const schema = {
  "@context": "https://schema.org/",
  "@type": "Organization",
  "url": "https://seanlawrence.co/",
  "name": "Sean Lawrence",
  "logo": {
    "@type": "ImageObject",
    "url": Logo
  },
  "sameAs": [
    "https://www.github.com/seanwlawrence",
    "https://www.linkedin.com/in/sean-lawrence-21792799/"
  ]
}

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
    <Helmet>
      <title> Sean Lawrence - Contact</title>
      <meta charset="UTF-8" />
      <meta name="author" content="Sean Lawrence" />
      <meta name="keywords" content="HTML, CSS, React.js, JavaScript, Web Developer, Website Builder" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content='Modern e-commerce web developer, specializing in React.js and Node.js.' />
      <meta property="og:type" content='website' />
      <meta property="og:title" content={'Sean Lawrence - Modern web developer'} />
      <meta property="og:description" content='Modern e-commerce web developer, specializing in React.js and Node.js.' />
      <meta property="og:url" content='https://seanlawrence.co/' />
      <meta property="og:image" content={ProfileImage} />
      <meta property="og:image:alt" content='Profile image of Sean Lawrence' />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="200" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@seanbeastgrip" />
      <meta name="google-site-verification" content="tkm-v6VCHYsnUCE5-xPwIpiBMOtrxHNvrz7kSlNP5sU" />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
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
  </section >
)