import React from 'react'
import NAVIGATION_DATA from '../data/navigation'
import styled from 'styled-components'
import Link from 'gatsby-link'

const HeaderWrapper = styled.header`
display: flex;
justify-content: center;
padding: 5px 0;
background-color: rgba(0, 0, 0, .95);
position: fixed;
top: 0;
left: 0;
right: 0;
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

const HeaderLink = styled(Link) `
  color: #fff;
  text-decoration: none;
  border-bottom: 0;
`

const Header = () => (
  <HeaderWrapper>
    <Navigation>
      {
        NAVIGATION_DATA.map(page =>
          <HeaderLink to={page.url}
            key={page.title}
          >
            <NavigationItem>{page.title}</NavigationItem>
          </HeaderLink>
        )
      }
    </Navigation>
  </HeaderWrapper>
)

export default Header