import React, { Component } from 'react'
import NAVIGATION from '../data/NAVIGATION'
import Link from 'gatsby-link'
import Logo from '../img/logo.png'

const NavListItem = props => (
  <li
    key={props.title}
  >
    <Link
      to={props.url}
      onClick={props.click}
      className={props.className}
    >
      {props.title}
    </Link>
  </li>
)

class Header extends Component {
  state = {
    activePage: 'Contact'
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
      <nav id='site_navigation'>
        <ul>
          {
            NAVIGATION.map(page => {
              const { title, url } = page;
              if (title === 'logo') {
                return (
                  <Link to='/'>
                    <img src={Logo} style={{ maxHeight: '30px' }} />
                  </Link>
                )
              }
              return (
                <NavListItem title={title} url={url} click={this.handleClick.bind(this)} className={this.state.activePage === url ? 'active' : null} />
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Header