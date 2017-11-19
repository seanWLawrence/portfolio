import React from 'react'
import NAVIGATION_DATA from '../data/navigation'
import styled from 'styled-components'
import Link from 'gatsby-link'

const HeaderWrapper = styled.header`
display: flex;
justify-content: center;
padding: 5px 0;
background-color: rgba(0, 0, 0, .9);
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
margin: auto 30px;
:hover {
  border-bottom: 0;
  color: #eee;
}
@media (max-width: 525px) {
  margin: auto 2.5vw;
  padding: 10px 10px;
}
`

const ActiveNavigationItem = NavigationItem.extend`
  border-bottom: 2px solid #2D9CDB;
  :hover {
  border-bottom: 2px solid #2D9CDB;
  color: #fff;
}
`

const HeaderLink = styled(Link) `
  color: #fff;
  text-decoration: none;
`

const Header = props => (
  <HeaderWrapper>
    <Navigation>
      {
        NAVIGATION_DATA.map(page =>
          <HeaderLink to={page.url}
            key={page.title}
          >
            {
              (window.location.pathname === page.url)
                ? <NavigationItem className='active'>{page.title}</NavigationItem>
                : <NavigationItem>{page.title}</NavigationItem>
            }

          </HeaderLink>
        )
      }
    </Navigation>
  </HeaderWrapper>
)

export default Header