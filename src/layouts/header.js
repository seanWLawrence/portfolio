import React, { Component } from 'react'
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

const HeaderLink = styled(Link) `
  color: #fff;
  text-decoration: none;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 'Contact'
    }
  }

  componentDidMount() {
    this.setState({
      activePage: window.location.pathname
    })
  }

  handleClick(e) {
    this.setState({
      activePage: e.target.pathname
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Navigation>
          {
            NAVIGATION_DATA.map(page =>
              <NavigationItem
                key={page.title}
              >
                <HeaderLink
                  to={page.url}
                  onClick={this.handleClick.bind(this)}
                  className={this.state.activePage === page.url ? 'active' : null}
                >
                  {page.title}
                </HeaderLink>
              </NavigationItem>
            )
          }
        </Navigation>
      </HeaderWrapper>
    )
  }
}

export default Header