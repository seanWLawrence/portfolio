import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components"
import './index.css'

const HeaderWrapper = styled.header`
display: flex;
justify-content: center;
padding: 5px 0;
background-color: #111;
`
const Navigation = styled.ul`
display: flex;
flex-wrap: no-wrap;
margin: 0;
padding: 0;
list-style-type: none;
`
const NavigationItem = styled.li`
padding: 10px 20px;
`

const NAVIGATION_DATA = [
  {
    title: 'SL',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Services',
    url: '/services'
  },
  {
    title: 'Work',
    url: '/work'
  },
  {
    title: 'Contact',
    url: '/contact'
  },
]


const Header = () => (
  <HeaderWrapper>
    <Navigation>
      {NAVIGATION_DATA.map(page =>
        <Link to={page.url}
          key={page.title}
        >
          <NavigationItem>{page.title}</NavigationItem>
        </Link>
      )}
    </Navigation>
  </HeaderWrapper>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sean Lawrence - Modern Web Developer"
      meta={[
        { name: 'description', content: 'I make fast, modern websites with high-ranking SEO, analytics and results' },
        { name: 'keywords', content: 'website builder, web developer, web designer' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
